import { mainNavProps } from "../utils/constants";
import logoCNWSwhite from "../images/logo/logo-cnws-white.svg";
import Button from "./Button";
import mobileMenu from "../images/svg/mobile-menu.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import useDeviceDetectService  from '../services/device-detect';
import LogIn from "../components/LogIn";
import { useEffect, useState } from "react";
import { useAuth, AuthProps } from "../context/auth";
import ProfilePicture from "./ProfilePicture";
import UserProfile from "./UserProfile";
import Typography from "./Typography";
import { useStorage, StorageProps } from "../context/storage";
import Icon from "./Icon";
import { useClickOutside } from "../services/click-outside";

type NavProps<T> = {
	items: T[];
}

const Nav = <T extends mainNavProps>({ items } : NavProps<T>) => {
	const { isScreenMini }  = useDeviceDetectService();
	const [displayMenu, setDisplayMenu] = useState<boolean>(false);
	const [showLogIn, setShowLogIn] = useState<boolean>(false);
	const [showUserProfile, setShowUserProfile] = useState<boolean>(false);
	const [navItems, setNavItems] = useState<mainNavProps[]>([{ name: '', route: '', show: false }]);
	const [userRole, setUserRole] = useState<string | null>(null);
	
	const { currentUser, signOut, emailVerification }: AuthProps = useAuth();
	const { getUserFromDataBase }: StorageProps = useStorage();

	const navigate = useNavigate();

	const ref = useClickOutside(() => {
		handleMobileMenu('close');
	})

	const handleMobileMenu = (status: string) => {
		if (status === 'open') {
			setDisplayMenu(true);

			if (displayMenu) {
				setDisplayMenu(false);
			}
			return;
		}
		setDisplayMenu(false);
	}

	const getUserRole = async () => {
		if (getUserFromDataBase && currentUser?.uid) {
			const user = await getUserFromDataBase(currentUser.uid);
			
			if (user?.role) {
				setUserRole(user.role);
			}
		}
	}

	useEffect(() => {
		getUserRole();

		const routeDashboard = items.find(item => item.name === 'Dashboard');
		const pathName = window.location.pathname;
		
		if (routeDashboard && userRole) {
			if (currentUser?.uid) {
				const adminRoles: string[] = ['admin', 'superAdmin'];

				if (adminRoles.includes(userRole)) {
					routeDashboard.show = true;
				} else {
					if (pathName === '/dashboard') {
						navigate('/');
					}
					routeDashboard.show = false;
				}
			} else {
				routeDashboard.show = false;
			}
		}

		const checkedItems = items.map((item) => {
			if(item.show) {
				return item;
			}
			return null;
		}).filter((item): item is T => item !== null);
		
		setNavItems(checkedItems);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser?.uid, items, userRole]);

	const sendEmailVerification = async () => {
		if (emailVerification) {
			await emailVerification();
		}
	}

	const Logout = () => {
		if (signOut) {
			signOut();
		}
		setUserRole('user');
		handleMobileMenu('close');
	}

	return (
		<>
			<div className="nav">
				<div className={`nav_wrapper ${isScreenMini && !currentUser?.emailVerified ? 'verification' : ''}`}>
					<NavLink to="/">
						<img className="logo_small" src={logoCNWSwhite}></img>
					</NavLink>
					{/* Desktop Menu */}
					{	!isScreenMini &&
						<>
							<div className="nav_buttons">
								{navItems.map((item, index) => {
									return (
										<NavLink to={item.route} className={`nav_button ${item.icon === 'home' ? 'home' : '' }`} key={index}>
											{ item.icon && <Icon variant={item.icon} color={item.icon === 'admin' ? 'red' : 'white'} />}
											{item.name}
										</NavLink>
									)
								})}
							</div>
							<div className="user_auth">
								<ProfilePicture img={currentUser?.photoURL} onClick={() => setShowUserProfile(true)}></ProfilePicture> 
								{ !currentUser?.uid ? <Button type="secondary medium" onClick={() => setShowLogIn(true)}>Login</Button> : null }
								{ currentUser?.uid ? <Button type="secondary medium" onClick={signOut}>Logout</Button> : null }
							</div>
						</>
					} 
					
					{/* Mobile Menu */}
					{ isScreenMini &&
						<>
							<ProfilePicture img={currentUser?.photoURL} onClick={() => setShowUserProfile(true)}></ProfilePicture>
							<img className="mobile_menu" src={mobileMenu} onClick={() => handleMobileMenu('open')}></img>
						</>
					}

					{	 displayMenu &&
						<div className={`mobile_nav_buttons ${!currentUser?.emailVerified ? 'verification' : ''}`} ref={ref}>
							{navItems.map((item, index) => {
								return (
									<NavLink to={item.route} className={`nav_button ${item.icon === 'home' ? 'home' : '' }`} key={index} onClick={() => handleMobileMenu('close')} >
										{ item.icon && <Icon variant={item.icon} color={item.icon === 'admin' ? 'red' : 'white'} />}
										{item.name}
									</NavLink>
								)
							})}
							{ !currentUser?.uid ? <Button type="secondary medium" onClick={() => setShowLogIn(true)}>Login</Button> : null }
							{ currentUser?.uid ? <Button type="secondary medium" onClick={Logout}>Logout</Button> : null }
						</div>
					}
				</div>

				{	showLogIn && <LogIn onClose={() => setShowLogIn(false)} /> }

				{	showUserProfile && currentUser  && <UserProfile onClose={() => setShowUserProfile(false)}></UserProfile> }
			</div>

			{	currentUser?.uid && !currentUser?.emailVerified &&
					<div className="email_verified">
						<Typography className="text" onClick={sendEmailVerification} mode="body" family="medium_xs_white">Click here to verify your email address!</Typography>
					</div>
			}
		</>
	)
}

export default Nav;