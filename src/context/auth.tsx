/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState, ReactNode, useContext } from "react"
import {	signInWithEmailAndPassword, 
			createUserWithEmailAndPassword,
			updateProfile,
			updateEmail,
			sendEmailVerification,
			updatePassword,
			deleteUser,
			User,
			GoogleAuthProvider,
			FacebookAuthProvider,
			signInWithPopup,
		} from "firebase/auth";
import { auth } from '../config/firebase';
import { useStorage, StorageProps, DataBaseUserProps } from "./storage";

type AuthProviderProps = {
	children: ReactNode;
}

export interface UserProps {
	uid?: string;
	email?: string;
	displayName?: string;
	photoURL?: string;
	emailVerified?: boolean;
}

export interface AuthProps {
	currentUser?: UserProps;
	currentUserDb?: DataBaseUserProps;
	signUp?: (email: string, password: string) => Promise<void>;
	signIn?: (email: string, password: string) => Promise<void>;
	signInError?: string | null;
	setSignInError?: (error: string | null) => void;
	signOut?: () => void;
	signUpError?: string | null;
	setSignUpError?: (error: string | null) => void;
	updateUserProfile?: (name: string, photo: string) => void;
	updateUserEmail?: (email: string) => Promise<string>;
	emailVerification?: () => Promise<void>;
	updateUserPassword?: (newPassword: string) => Promise<void>;
	deleteUserProfile?: (user: User) => Promise<void>;
	signInWithGoogle?: () => Promise<void>;
	signInWIthFacebook?: () => void;
	accountAlreadyExists?: boolean;
}

const AuthContext = React.createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [currentUser, setCurrentUser] = useState({});
	const [currentUserDb, setcurrentUserDb] = useState({});
	const [signInError, setSignInError] = useState<string | null>(null);
	const [signUpError, setSignUpError] = useState<string | null>(null);
	const [accountAlreadyExists, setAccountAlreadyExists] = useState<boolean>(true);

	const { 
		createUserProfileOnDataBase, 
		getCollectionFromDataBase, 
		updateUserProfileOnDataBase, 
		getUserFromDataBase, 
	}: StorageProps = useStorage();

	const getDbUser = async (uid: string) => {
		try {
			if (getUserFromDataBase) {
				const dbUser = await getUserFromDataBase(uid)
				setcurrentUserDb(dbUser);
			}
		} catch (error) {
			console.error('AuthProvider::getDbUser:', error)
		}
	}

	const onStateChanged = () => {
		auth.onAuthStateChanged(user => {
			if (user != null) {
				setCurrentUser(user);
				getDbUser(user.uid)
				
				console.log('AuthProvider::User Logged in!');
			} else {
				setCurrentUser({});
				console.log('AuthProvider::No user logged!');
			}
		});
	}

	useEffect(() => {
		onStateChanged();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const signUp = async (email: string, password: string) => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);
			
			if (user.uid && user.email) {
				setAccountAlreadyExists(false);
				
				if (createUserProfileOnDataBase) {
					await createUserProfileOnDataBase({ 
						email: user.email, 
						name: null,
						phone: null,
						photo: '',
						id: user.uid,  
						// @ts-ignore
						createdDate: Number(user.metadata.createdAt),
						country: null,
						city: null,
						role: 'user',
						isNewUser: true,
					});
				}
			}
			
		} catch (error) {
			if (error instanceof Error) {
				// @ts-expect-error code is not declared in Error
				if (error.code === 'auth/email-already-in-use') {
					setSignUpError('This email already exists!');

					// @ts-expect-error code is not declared in Error
				} else if (error.code === 'auth/invalid-email') {
					setSignUpError('Invalid Email Address!');
				}

				console.log('AuthProvider::signUp:', error.message);
			} else {
				console.log('AuthProvider::signUp::Unexpected error:', error);
			}
		}
	}

	const signIn = async (email: string, password: string) => {
		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password);	
			return user;

		} catch (error) {
			if (error instanceof Error) {
				// @ts-expect-error code is not declared in Error
				if (error.code === 'auth/invalid-login-credentials') {
					setSignInError('The user or password is incorrect!');
				}

				// @ts-expect-error code is not declared in Error
				if (error.code === 'auth/too-many-requests') {
					setSignInError('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.');
				}

				console.error('AuthProvider::signIn:', error.message);
			} else {
				console.error('AuthProvider::signIn::Unexpected error:', error);
			}
		}
	}

	const signOut = () => {
		try {
			return auth.signOut();
		} catch (error) {
			console.error('AuthProvider::signOut:', error);
		}
	}

	const updateUserProfile = async (name: string | null, photoUrl: string | null) => {
		try {

			if (photoUrl === 'unset') {
				photoUrl = null;
			}

			if (name === 'unset') {
				name = null;
			}

			if (auth.currentUser != null) {
				await updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl });
			}
		} catch (error) {
			console.error('AuthProvider::updateUserProfile:', error)
		}
	}

	const updateUserEmail = async (email: string) => {
		try {
			if (auth.currentUser != null) {
				console.log('updateUserEmail');
				const emailCheck = await updateEmail(auth.currentUser, email)
				return emailCheck;
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error('AuthProvider::updateUserEmail:', error.message)
			}
		}
	}

	const emailVerification = async () => {
		try {
			if (auth.currentUser) {
				await sendEmailVerification(auth.currentUser)
			}
		} catch (error) {
			console.error('AuthProvider::emailVerification:', error)
		}
	}

	const updateUserPassword = async (newPassword: string) => {
		try {
			if (auth.currentUser) {
				const result = await updatePassword(auth.currentUser, newPassword)
				return result;
			}
			return null;
		} catch (error) {
			console.error('AuthProvider::updateUserPassword:', error)
		}
	}

	const deleteUserProfile = async (user: User) => {
		try {
			const result = await deleteUser(user);
			return result;
		} catch (error) {
			console.error('AuthProvider::deleteUserProfile:', error)
		}
	}
	
	const signInWithGoogle = async () =>  {
		try {
			let isUserAlreadyRegistered = null;
			const provider = new GoogleAuthProvider();
			const { user } = await signInWithPopup(auth, provider);

			if (user.uid && user.email) {
				if (getCollectionFromDataBase) {
					const allIds = await getCollectionFromDataBase('ids');
					isUserAlreadyRegistered = allIds.find(element => element.id === user.uid)
				}

				if (isUserAlreadyRegistered) {
					if (user.photoURL && updateUserProfileOnDataBase) {
						updateUserProfileOnDataBase({ photo: user.photoURL }, user.uid)
					}
					setAccountAlreadyExists(true);
					return;
				}
				setAccountAlreadyExists(false);

				if (createUserProfileOnDataBase) {
					await createUserProfileOnDataBase({ 
						email: user.email, 
						name: user.displayName,
						phone: null,
						photo: user.photoURL ? user.photoURL : '',
						id: user.uid,  
						// @ts-ignore
						createdDate: Number(user.metadata.createdAt),
						country: null,
						city: null,
						role: 'user',
						isNewUser: true,
					});
				}
			}
	
		} catch (error) {
			
			if (error instanceof Error) {
				const googleError = {
					// @ts-expect-error code is not declared in Error
					errorCode: error.code,
					errorMessage: error.message,
					// @ts-expect-error code is not declared in Error
					email: error.customData.email,
				}
				console.error('AuthProvider::signInWithGoogle:', googleError)
			}
		}
	}

	const signInWIthFacebook = async () => {
		try {
			let isUserAlreadyRegistered = null;
			const provider = new FacebookAuthProvider();
			const { user } = await signInWithPopup(auth, provider);

			if (user.uid && user.email) {
				if (getCollectionFromDataBase) {
					const allIds = await getCollectionFromDataBase('ids');
					isUserAlreadyRegistered = allIds.find(element => element.id === user.uid)
				}

				if (isUserAlreadyRegistered) {
					if (user.photoURL && updateUserProfileOnDataBase) {
						updateUserProfileOnDataBase({ photo: user.photoURL }, user.uid)
					}
					setAccountAlreadyExists(true);
					return;
				}
				setAccountAlreadyExists(false);

				if (createUserProfileOnDataBase) {
					await createUserProfileOnDataBase({ 
						email: user.email, 
						name: user.displayName,
						phone: null,
						photo: user.photoURL ? user.photoURL : '',
						id: user.uid,  
						// @ts-ignore
						createdDate: Number(user.metadata.createdAt),
						country: null,
						city: null,
						role: 'user',
						isNewUser: true,
					});
				}
			}
			
		} catch (error) {
			console.error('AuthProvider::signInWIthFacebook:', error)
		}
	}

	const value = {
		currentUser,
		currentUserDb,
		signUp,
		signIn,
		signInError,
		setSignInError,
		signOut,
		signUpError,
		setSignUpError,
		updateUserProfile,
		updateUserEmail,
		emailVerification,
		updateUserPassword,
		deleteUserProfile,
		signInWithGoogle,
		signInWIthFacebook,
		accountAlreadyExists,
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}