import Typography from "../components/Typography";
import Components from "./admin-dashboard/Components";
import Subscribers from "./admin-dashboard/Subscribers";
import Users from "./admin-dashboard/Users";
import ContactForms from "./admin-dashboard/ContactForms";
import { useState } from "react";
import SidebarButton from "../components/SidebarButton";
import useDeviceDetectService from "../services/device-detect";
import Icon from "../components/Icon";

const Dashboard = () => {
	const [selectedPage, setSelectedPage] = useState<string>('components');
	const [pagesSelectionStatus, setPagesSelectionsStatus] = useState<boolean[]>([true, false, false, false, false]);
	const { isScreenMini } = useDeviceDetectService();
	const [displayMobileButtons, setDisplayMobileButtons] = useState<boolean>(false);

	const changePage = (page: string) => {
		setSelectedPage(page);

		const isPageSelected = [false, false, false, false, false];

		switch (page) {
			case 'components':
				isPageSelected[0] = true;
				break;

			case 'subscribers': 
				isPageSelected[1] = true;
				break;

			case 'users': 
				isPageSelected[2] = true;
				break;

			case 'contact': 
				isPageSelected[3] = true;
				break;
		}
		setPagesSelectionsStatus(isPageSelected);
		
		if (isScreenMini) {
			toggleMobileNav();
		}
	}

	const toggleMobileNav = () => {
		setDisplayMobileButtons(!displayMobileButtons);
	}

	return (
		<div className="admin_dashboard">
			<div className="admin_dashboard_title">
				<Typography className="text_center" mode="grey" family="4xl">{ isScreenMini ? 'Admin Dash' : 'Admin Dashboard' }</Typography>
				{ isScreenMini && <Icon variant="mobile-navigation" color="grey" onClick={toggleMobileNav} /> }
			</div>

			<div className="dashboard_wrapper">
				{ displayMobileButtons && 
					<div className="sidebar">
						<SidebarButton name="Components" icon="react" onClick={() => changePage('components')} isButtonSelected={pagesSelectionStatus[0]} />
						<SidebarButton name="Subscribers" icon="subscribers" onClick={() => changePage('subscribers')} isButtonSelected={pagesSelectionStatus[1]} />
						<SidebarButton name="Users" icon="users" onClick={() => changePage('users')} isButtonSelected={pagesSelectionStatus[2]} />
						<SidebarButton name="Contact Forms" icon="contact-form" onClick={() => changePage('contact')} isButtonSelected={pagesSelectionStatus[3]} />
					</div>
				}

				{ !isScreenMini && 
					<div className="sidebar">
						<SidebarButton name="Components" icon="react" onClick={() => changePage('components')} isButtonSelected={pagesSelectionStatus[0]} />
						<SidebarButton name="Subscribers" icon="subscribers" onClick={() => changePage('subscribers')} isButtonSelected={pagesSelectionStatus[1]} />
						<SidebarButton name="Users" icon="users" onClick={() => changePage('users')} isButtonSelected={pagesSelectionStatus[2]} />
						<SidebarButton name="Contact Forms" icon="contact-form" onClick={() => changePage('contact')} isButtonSelected={pagesSelectionStatus[3]} />
					</div>
				}

				<div className="pages">
					{ selectedPage === 'components' && <Components /> }
					{ selectedPage === 'subscribers' && <Subscribers /> }
					{ selectedPage === 'users' && <Users /> }
					{ selectedPage === 'contact' && <ContactForms /> }
				</div>
			</div>
		</div>
	)
}

export default Dashboard;