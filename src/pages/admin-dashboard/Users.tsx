import Button from "../../components/Button"
import { useAuth, AuthProps } from "../../context/auth";
import { useStorage, StorageProps, DataBaseUserProps } from "../../context/storage";
import { useUsersManagement, UsersManagementProps } from "../../context/users-management";
import Typography from "../../components/Typography";
import { useEffect, useState } from "react";
import ProfilePicture from "../../components/ProfilePicture";
import Loader from "../../components/Loader";
import { getDate } from "../../services/date-service";
import Input from "../../components/Input";
import { ChangeEvent } from "react";
import Dropdown from "../../components/Dropdown";
import { countryList } from "../../utils/constants";
import Alert from "../../components/Alert";

const Users = () => {
	const { getCollectionFromDataBase, deleteUserFromDb, updateUserProfileOnDataBase }: StorageProps = useStorage();
	const { setAdmin, removeAdmin }: UsersManagementProps = useUsersManagement();

	const [users, setUsers] = useState<DataBaseUserProps[]>([]);
	const [dbUsers, setDbUsers] = useState<DataBaseUserProps[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState('');
	const [emailFilter, setEmailFilter] = useState('');
	const [cityFilter, setCityFilter] = useState('');
	const [countryFilter, setCountryFilter] = useState('');
	const [roleFilter, setRoleFilter] = useState('');
	const [displayFilters, setDisplayFilters] = useState<boolean>(false);
	const [showDeleteUserAlert, setShowDeleteUserAlert] = useState<boolean>(false);
	const [showDeletedUserAlert, setShowDeletedUserAlert] = useState<boolean>(false);
	const [selectedUserForDeletion, setSelectedUserForDeletion] = useState<DataBaseUserProps | null>(null);
	const [updateUsersList, setUpdateUsersList] = useState<boolean>(false);

	const filters = [
		{ filterName: 'Email', options: [], placeholder: 'Filter by Email', onChange: (event: ChangeEvent<HTMLInputElement>) => setEmailFilter(event.target.value), value: emailFilter },
		{ filterName: 'City', options: [], placeholder: 'Filter by City', onChange: (event: ChangeEvent<HTMLInputElement>) => setCityFilter(event.target.value), value: cityFilter },
		{ filterName: 'Filter by Country', options: countryList, select: (option: string) => setCountryFilter(option) },
		{ filterName: 'Filter by Role', options: [{ option: 'user' }, { option: 'admin' }, { option: 'superAdmin' }], select: (option: string) => setRoleFilter(option) },
	];

	const { currentUserDb }: AuthProps = useAuth();

	const getUsers = async () => {
		if (showDeletedUserAlert) {
			return;
		}

		setLoading(true);
		if (getCollectionFromDataBase) {
			const result = await getCollectionFromDataBase('users');

			const dbUsers = result.map((user: DataBaseUserProps) => {
				if (user?.createdDate) {
					user.formatedDate = getDate(user.createdDate);
				}
				return user;
			})

			setUsers(dbUsers);
			setDbUsers(dbUsers);
			setLoading(false);
		}
	}

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value
		setSearchValue(inputValue);

		const filteredByName = dbUsers.filter((user) => {
			if (user.name) {
				return user.name.toLowerCase().includes(inputValue.toLowerCase())
			}
		});

		setUsers(filteredByName);

		if (inputValue.length === 0) {
			setUsers(dbUsers);
		}
	}

	const filterUsers = () => {
		const allFilters = dbUsers.filter((user) => {
			const userEmail = user.email ?? '';
			const userCountry = user.country ?? '';
			const userCity = user.city ?? '';
			const userRole = user.role ?? '';

			return userEmail.toLowerCase().includes(emailFilter.toLowerCase()) &&
			userCountry.toLowerCase().includes(countryFilter.toLowerCase()) &&
			userCity.toLowerCase().includes(cityFilter.toLowerCase()) &&
			userRole.toLowerCase().includes(roleFilter.toLowerCase());
		})

		setUsers(allFilters);
	}

	const displayError = () => {
		console.log(`Users: Something didn't work when trying to display the filters!`)
	}

	const resetFilters = () => {
		setSearchValue('');
		setEmailFilter('');
		setCityFilter('');
		setCountryFilter('');
		setRoleFilter('');

		const dropdowns = document.querySelectorAll('.selected_option');
		dropdowns[0].textContent = 'Filter by Country';
		dropdowns[1].textContent = 'Filter by Role';

		setUsers(dbUsers);
	}

	const makeAdmin = (user: DataBaseUserProps) => {
		if (setAdmin) {
			setAdmin(user);
			resetUsersList();
		}
	}

	const deleteAdmin = (user: DataBaseUserProps) => {
		if (removeAdmin) {
			removeAdmin(user);
			resetUsersList();
		}
	}

	const checkUserRole = (user: DataBaseUserProps) => {
		return user.role != 'superAdmin' && user.role != 'admin';
	}

	const isUserSetting = (user: DataBaseUserProps) => {
		return currentUserDb?.role === 'superAdmin' && user.role === 'user';
	}

	const isAdminSetting = (user: DataBaseUserProps) => {
		return currentUserDb?.role === 'superAdmin' && user.role === 'admin';
	}

	const handleDeleteUser = (selectedUser: DataBaseUserProps) => {
		toggleDeleteUserAlert();
		setSelectedUserForDeletion(selectedUser);
	}

	const deleteUser = () => {
		if (selectedUserForDeletion?.id && deleteUserFromDb) {
			deleteUserFromDb(selectedUserForDeletion?.id);
			toggleDeleteUserAlert();
			toggleDeletedUserAlert();
		}
	}

	const toggleDeleteUserAlert = () => {
		setShowDeleteUserAlert(!showDeleteUserAlert);
	}

	const toggleDeletedUserAlert = () => {
		setShowDeletedUserAlert(!showDeletedUserAlert);
	}

	const checkNewUser = (user: DataBaseUserProps) => {
		if (updateUserProfileOnDataBase && user?.id) {
			user.isNewUser = false;
			updateUserProfileOnDataBase(user, user.id)
			resetUsersList();
		}
	}

	const resetUsersList = () => {
		setUpdateUsersList(!updateUsersList);
	}
	
	useEffect(() => {
		getUsers();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [showDeletedUserAlert, updateUsersList])

	return (
		<div className="users_dashboard">
			<Typography mode="blue" family="lg">Users: {dbUsers.length}</Typography>

			<div className="users_action">
				<Button className="show_users_btn" type="secondary small" onClick={() => setDisplayFilters(!displayFilters)}>{displayFilters ? 'Hide' : 'Show'} Filters</Button>
				<Input value={searchValue} onChange={handleSearch} label="Filter by name" placeholder="Filter by name"/>
			</div>

			<div className={`users ${loading ? 'loading' : ''}`}>
				{ !loading &&
					<>	
						{ displayFilters &&
							<div className="filters_wrapper">
							<Typography mode="grey" family="lg">All Filters</Typography>

								<div className="filters">
									{ filters.map((filter, index) => (
										<div key={index}>
											{ filter.options.length === 0 &&  <Input onChange={filter.onChange ?? displayError} value={filter.value} placeholder={filter.placeholder} label={filter.placeholder} /> }	
											{ filter.options.length != 0 && <Dropdown className="lg" items={filter.options} text={filter.filterName} selected={filter.select ?? displayError} dropdownIndex={filters.length - index - 1} /> }
										</div>
									))}
								</div>
								
								<div className="filter_buttons">
									<Button type="secondary small" onClick={filterUsers}>Filter</Button>
									<Button type="secondary small" onClick={resetFilters}>Reset Filters</Button>
								</div>
							</div>
						}

						{ users?.length != 0 &&
							<Typography className="title_row" mode="grey" family="md">
								<span className="nr">Nr.</span>
								<span className="photo_name">User</span>
								<span className="email">Email</span>
								<span className="city">City</span>
								<span className="country">Country</span>
								<span className="role">Role</span>
								<span className="date">Date</span>
							</Typography>
						}

						{users?.map((user, index) => (
							<div className={`user ${user.isNewUser ? 'new_entry' : ''}`} key={index}>
								<Typography className="nr" mode="blue" family="xs">{index + 1}</Typography>
								<ProfilePicture img={user.photo}></ProfilePicture>
								<Typography className="name" mode="blue" family="xs">{user.name ?? 'User'}</Typography>
								<Typography className="email" mode="grey" family="xs">{user.email}</Typography>
								<Typography className="city" mode="grey" family="xs">{user.city ?? 'Unknown'}</Typography>
								<Typography className="country" mode="grey" family="xs">{user.country ?? 'Unknown'}</Typography>
								<Typography className="role" mode="grey" family="xs">{user.role}</Typography>
								<Typography className="date" mode="grey" family="xs">{user.formatedDate}</Typography>
								{ checkUserRole(user) && <Button className="delete_user" type="primary_red mini" onClick={() => handleDeleteUser(user)}>Delete User</Button> }
								{ isUserSetting(user) && <Button className="delete_user" type="primary_green mini" iconColor="yellow" onClick={() => makeAdmin(user)}>Set Adm</Button> }
								{ isAdminSetting(user) && <Button className="delete_user" type="primary_yellow mini" onClick={() => deleteAdmin(user)}>Remove Adm</Button> }
								{ isUserSetting(user) && user.isNewUser && <Button className="delete_user" type="primary_green mini" onClick={() => checkNewUser(user)}>Check</Button> }
							</div>
						))}
					</>
				}

				{ loading && <Loader /> }
			</div>

			<Alert 
				type="warning" 
				show={showDeleteUserAlert} 
				primaryBtn="No" 
				primaryBtnAction={toggleDeleteUserAlert}
				secondaryBtn="Yes" 
				secondaryBtnAction={deleteUser}
				title="Delete User"
				text={`Do you want to delete this user: ${selectedUserForDeletion?.email} ?`} 
				onClose={toggleDeleteUserAlert}
			/>

			<Alert 
				type="warning" 
				show={showDeletedUserAlert} 
				primaryBtn="Close" 
				primaryBtnAction={toggleDeletedUserAlert}
				title="User Deleted"
				text={`The user: ${selectedUserForDeletion?.email} has been deleted!`} 
				onClose={toggleDeletedUserAlert}
			/>
		</div>
	)
}

export default Users