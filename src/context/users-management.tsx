import React, { ReactNode, useContext } from "react"
import { useAuth, AuthProps } from "./auth";
import { useStorage, StorageProps, DataBaseUserProps } from "./storage";

type UsersManagementProviderProps = {
	children: ReactNode;
}

export interface UsersManagementProps {
	setAdmin?: (user: DataBaseUserProps) => void;
	removeAdmin?: (user: DataBaseUserProps) => void;
}

const UsersManagementContext = React.createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useUsersManagement() {
	return useContext(UsersManagementContext);
}

export const UsersManagementProvider = ({ children }: UsersManagementProviderProps) => {

	const { currentUser }: AuthProps = useAuth();
	const { updateUserProfileOnDataBase, getUserFromDataBase }: StorageProps = useStorage();

	const isSuperAdmin = async () => {
		try {
			if (getUserFromDataBase && currentUser?.uid) {
				const authenticatedUser = await getUserFromDataBase(currentUser.uid);
				return authenticatedUser.role === 'superAdmin';
			}
		} catch (error) {
			console.error('UsersManagementProvider::isSuperAdmin:', error)
		}
	}
	
	const setAdmin = async (user: DataBaseUserProps) => {
		try {
			if (!await isSuperAdmin()) {
				console.error('UsersManagementProvider::setAdmin: Insufficient permissions! Contact a superAdmin for more details.');
				return;
			}
	
			if (updateUserProfileOnDataBase && user.id) {
				user.role = 'admin';

				await updateUserProfileOnDataBase(user, user.id);
				console.info(`UsersManagementProvider::setAdmin: ${user.name}'s role is 'admin' now!`)
			}
		} catch (error) {
			console.error('UsersManagementProvider::setAdmin:', error)
		}
	}

	const removeAdmin = async (user: DataBaseUserProps) => {
		try {
			if (!await isSuperAdmin()) {
				console.error('UsersManagementProvider::setAdmin: Insufficient permissions! Contact a superAdmin for more details.');
				return;
			}
	
			if (updateUserProfileOnDataBase && user.id) {
				user.role = 'user';

				await updateUserProfileOnDataBase(user, user.id);
				console.info(`UsersManagementProvider::removeAdmin: ${user.name}'s role is 'user' now!`)
			}
		} catch (error) {
			console.error('UsersManagementProvider::setAdmin:', error)
		}
	}

	const value = {
		setAdmin,
		removeAdmin,
	}

	return (
		<UsersManagementContext.Provider value={value}>
			{children}
		</UsersManagementContext.Provider>
	)
}

