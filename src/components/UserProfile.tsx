import CustomModal from "./CustomModal";
import { AuthProps, useAuth } from "../context/auth";
import { useStorage, StorageProps, DataBaseUserProps } from "../context/storage";
import ProfilePicture from "./ProfilePicture";
import Input from "./Input";
import { useEffect, useState } from "react";
import Button from "./Button";
import Alert from "./Alert";
import { ChangeEvent } from "react";
import Typography from "./Typography";
import Loader from "./Loader";
import Dropdown from "./Dropdown";
import { countryList } from "../utils/constants";

type UserProfileProps = {
	onClose: () => void;
}

type UserInfoProps = {
	title?: string;
	titleValue?: string;
	value?: string;
	placeholder?: string;
	updateName?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onClick: () => void;
}

const UserProfile = ({ onClose }: UserProfileProps) => {
	const { currentUser, updateUserProfile, updateUserEmail, updateUserPassword }: AuthProps = useAuth();
	const { uploadProfilePhoto, getUserFromDataBase, updateUserProfileOnDataBase }: StorageProps = useStorage();
	
	const [loading, setLoading] = useState<boolean>(true);
	const [userPassword, setUserPassword] = useState<string>('');
	const [user, setUser] = useState<DataBaseUserProps>({});
	const [newUser, setNewUser] = useState<DataBaseUserProps>({});
	
	const [inputsStatus, setInputsStatus] = useState<boolean[]>([false, false, false, false, false, false]);
	const [profileUpdatedAlert, setProfileUpdatedAlert] = useState<boolean>(false);

	const getUser = async () => {
		if (getUserFromDataBase && currentUser?.uid) {
			const userFromDataBase = await getUserFromDataBase(currentUser.uid);
			setUser(userFromDataBase);
			setLoading(false);
		}
	}

	useEffect(() => {
		getUser();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	/**
	 * It will change the status for all the inputs listed below
	 * @param inputPosition [userName, email, phone, country, city, password]
	 */
	const changeInputsStatus = (inputPosition: number) => {
		const newInputsStatus = [...inputsStatus];
		newInputsStatus[inputPosition] = !newInputsStatus[inputPosition];

		setInputsStatus(newInputsStatus);
	}

	const updateProfile = async () => {
		const photoUrl = newUser.photo ?? currentUser?.photoURL ?? 'unset';
		const userName = newUser.name ?? currentUser?.displayName ?? 'unset';

		if (updateUserProfile && userName) {
			updateUserProfile(userName, photoUrl);
		}

		if (updateUserEmail && newUser.email) {
			await updateUserEmail(newUser.email)
		}
			
		/* User update on MAIN DATA BASE */
		if (updateUserProfileOnDataBase && currentUser?.uid) {
			updateUserProfileOnDataBase(newUser, currentUser?.uid)
		}
		
		setProfileUpdatedAlert(true);
		changeInputsStatus(0);
	}			

	const imageSelection = async (event: ChangeEvent<HTMLInputElement>) => {
		if (uploadProfilePhoto && event.target.files) {
			const photoUrl = await uploadProfilePhoto(event.target.files[0]);
			
			const user = {...newUser};
			user.photo = photoUrl;
			user.photoName = event.target.files[0].name;
			setNewUser(user);	
		}
	};

	const changeUserName = (event: ChangeEvent<HTMLInputElement>) => {
		const user = {...newUser};
		user.name = event.target.value;
		setNewUser(user);
	}

	const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
		const user = {...newUser};
		user.email = event.target.value;
		setNewUser(user);
	}

	// const changePhone = (event: ChangeEvent<HTMLInputElement>) => {
	// 	const user = {...newUser};
	// 	user.phone = event.target.value;
	// 	setNewUser(user);
	// }

	const changeCountry = (option: string) => {
		const user = {...newUser};
		user.country = option;
		setNewUser(user);
	}

	const changeCountries = (event: ChangeEvent<HTMLInputElement>) => {
		console.log('UserCountry:', event.target.value);
	}

	const changeCity = (event: ChangeEvent<HTMLInputElement>) => {
		const user = {...newUser};
		user.city = event.target.value;
		setNewUser(user);
	}

	const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setUserPassword(event.target.value);
	}

	const updatePassword = async () => {
		changeInputsStatus(4)

		if (updateUserPassword) {
			await updateUserPassword(userPassword);
		}
	}

	const displayTypographyType = (isEditMode: boolean) => {
		if (isEditMode) {
			return 'primary_green mini';
		}
		return 'primary mini';
	}

	const closeUserProfile = () => {
		onClose();
		setProfileUpdatedAlert(false);
	}
	
	const userInfo: UserInfoProps[] = [
		{ title: 'Name', titleValue: user.name ?? '...', value: newUser.name ?? '', updateName: 'New User Name:', placeholder: 'Update User Name', onChange: changeUserName, onClick: () => changeInputsStatus(0)},
		{ title: 'Email', titleValue: user.email, value: newUser.email ?? '', updateName: 'New Email:', placeholder: 'Update Email', onChange: changeEmail, onClick: () => changeInputsStatus(1) },
		// { title: 'Phone', titleValue: user.phone ?? '...', value: newUser.phone ?? '', updateName: 'New Phone:', placeholder: 'Update Phone', onChange: changePhone, onClick: () => changeInputsStatus(2) },
		{ title: 'Country', titleValue: user.country ?? '...', value: newUser.country ?? '', updateName: 'New Country:', placeholder: 'Update Country', onChange: changeCountries, onClick: () => changeInputsStatus(2) },
		{ title: 'City', titleValue: user.city ?? '...', value: newUser.city ?? '', updateName: 'New City:', placeholder: 'Update City', onChange: changeCity, onClick: () => changeInputsStatus(3) },
		{ title: 'Change Password', titleValue: '', value: userPassword, updateName: '', placeholder: 'Update Password', onChange: changePassword, onClick: updatePassword },
	];

	return (
		<div className="user_profile_component">
			{	!profileUpdatedAlert &&
					<CustomModal title="User Profile" onClose={onClose}>
						<div className={`modal_content ${loading ? 'loading' : ''}`}>
							{ !loading &&
								<>
									<div className="user_photo">
										<ProfilePicture img={user.photo} type="view_only_medium"></ProfilePicture>
										<Input type="file" variant="file" photoName={newUser.photoName ?? null} onChange={imageSelection}></Input>
									</div>

									<div className="user_info_wrapper">
										{ userInfo.map((info: UserInfoProps, index) => {
											return (
												<div className="row_info" key={index}>
													<div>
														<Typography mode="grey" family="xs">{info.title}</Typography>
														<Typography mode="blue" family="sm">{info.titleValue}</Typography>

														{ info.value && index != 5 &&
															<div className="field_update">
																<Typography mode="grey" family="xs">{info.updateName}</Typography>
																<Typography mode="green" family="sm">{info.value}</Typography>
															</div>
														}
														
														{ inputsStatus[index] && !inputsStatus[2] &&
															<Input 
																type={ index === 5 ? 'password' : 'text' } 
																placeholder={info.placeholder} 
																value={info.value} 
																onChange={info.onChange}
															/>
														}

														{ inputsStatus[index] && inputsStatus[2] &&
															<Dropdown className="lg" items={countryList} selected={(option) => changeCountry(option)} text="Country"/>
														}
													</div>
													
													<Button 
														className="edit_btn"
														type={displayTypographyType(inputsStatus[index])} 
														onClick={info.onClick}>{ inputsStatus[index] ? index === 4 ? 'Update Password' : 'Save' : 'Edit' }
													</Button>
												</div>
											)
										})}
									</div>

									{ Object.keys(newUser).length > 0 && <Button type="primary" onClick={updateProfile}>Save Changes</Button> }
								</>
							}
							{ loading && <Loader /> }
						</div>
					</CustomModal>
			}

			<Alert 
				title="Success!" 
				text="User Profile Updated!" 
				show={profileUpdatedAlert} 
				primaryBtn="Close" 
				primaryBtnAction={closeUserProfile} 
				onClose={closeUserProfile} 
			/>
		</div>
	)
}

export default UserProfile;