import Button from "../components/Button";
import Typography from "../components/Typography";
import { useAuth, AuthProps } from "../context/auth";
import NpcCalculator from "../components/trav-comp/NpcCalculator";
import { useState } from "react";
import TotalArmyCost from "../components/trav-comp/TotalArmyCost";
import ArmyProduction from "../components/trav-comp/ArmyProduction";
import useDeviceDetectService from "../services/device-detect";
import ResourcesManager from "../components/trav-comp/ResourcesManager";
import CulturePoints from "../components/trav-comp/CulturePoints";
import LogIn from "../components/LogIn";
import SidebarButton from "../components/SidebarButton";
import Icon from "../components/Icon";
import CropStatus from "../components/trav-comp/CropStatus";

const Tools = () => {
	const { currentUser }: AuthProps = useAuth();
	const [selectedPage, setSelectedPage] = useState<string>('npc');
	const [showLogIn, setShowLogIn] = useState<boolean>(false);
	const [pagesSelectionStatus, setPagesSelectionsStatus] = useState<boolean[]>([true, false, false, false, false]);
	const [displayMobileButtons, setDisplayMobileButtons] = useState<boolean>(false);

	const { isScreenMini } = useDeviceDetectService();

	const changePage = (page: string) => {
		setSelectedPage(page);

		const isPageSelected = [false, false, false, false, false];

		switch (page) {
			case 'npc':
				isPageSelected[0] = true;
				break;

			case 'army_cost': 
				isPageSelected[1] = true;
				break;

			case 'army_prod': 
				isPageSelected[2] = true;
				break;

			case 'res_manager': 
				isPageSelected[3] = true;
				break;

			case 'culture_points': 
				isPageSelected[4] = true;
				break;
		}
		setPagesSelectionsStatus(isPageSelected);
		toggleMobileNav();
	}

	const toggleMobileNav = () => {
		setDisplayMobileButtons(!displayMobileButtons);
	}

	return (
		<div className="my_dashboard_page">
			<div className="sidebar">
				<Typography className="title text_center" mode="grey" family="xl">CNWS</Typography>
				
				<div className="sidebar_buttons">
					<SidebarButton name="Npc Calculator" icon="npc-calculator" onClick={() => changePage('npc')} isButtonSelected={pagesSelectionStatus[0]} />
					<SidebarButton name="Troops Cost" icon="troops-cost" onClick={() => changePage('army_cost')} isButtonSelected={pagesSelectionStatus[1]} />
					<SidebarButton name="Troops Production" icon="troops" onClick={() => changePage('army_prod')} isButtonSelected={pagesSelectionStatus[2]} />
					<SidebarButton name="Resources Manager" icon="resources-manager" onClick={() => changePage('res_manager')} isButtonSelected={pagesSelectionStatus[3]} />
					<SidebarButton name="Culture Points" icon="culture-points" onClick={() => changePage('culture_points')} isButtonSelected={pagesSelectionStatus[4]} />
					{/* <SidebarButton name="Crop Status" icon="grain" onClick={() => changePage('crop_status')} isButtonSelected={pagesSelectionStatus[5]} /> */}
				</div>
			</div>

			<div className="my_dashboard">
				<div className="title_nav">
					<Typography className="title" mode="black" family="3xl">Travian Tools</Typography>
					{ isScreenMini && currentUser?.uid && <Icon variant="mobile-navigation" color="grey" onClick={toggleMobileNav} /> }
					
				</div>

				{ isScreenMini && displayMobileButtons && 
					<div className="mobile_buttons">
						<SidebarButton name="Npc Calculator" icon="npc-calculator" onClick={() => changePage('npc')} isButtonSelected={pagesSelectionStatus[0]} />
						<SidebarButton name="Troops Cost" icon="troops-cost" onClick={() => changePage('army_cost')} isButtonSelected={pagesSelectionStatus[1]} />
						<SidebarButton name="Troops Production" icon="troops" onClick={() => changePage('army_prod')} isButtonSelected={pagesSelectionStatus[2]} />
						<SidebarButton name="Resources Manager" icon="resources-manager" onClick={() => changePage('res_manager')} isButtonSelected={pagesSelectionStatus[3]} />
						<SidebarButton name="Culture Points" icon="culture-points" onClick={() => changePage('culture_points')} isButtonSelected={pagesSelectionStatus[4]} />
						{/* <SidebarButton name="Crop Status" icon="grain" onClick={() => changePage('crop_status')} isButtonSelected={pagesSelectionStatus[5]} /> */}
					</div>
				}
				
				{ currentUser?.uid &&
						<div className="my_dashboard_wrapper">
							{ selectedPage === 'npc' && <NpcCalculator /> }
							{ selectedPage === 'army_cost' && <TotalArmyCost /> }
							{ selectedPage === 'army_prod' && <ArmyProduction /> }
							{ selectedPage === 'res_manager' && <ResourcesManager /> }
							{ selectedPage === 'culture_points' && <CulturePoints /> }
							{ selectedPage === 'crop_status' && <CropStatus /> }
						</div>
				}

				{ !currentUser?.uid && 
					<div className="logged_info">
						<Typography mode="grey" family="2xl">You must be logged in to use Travian Tools!</Typography>
						<Button className="my_dashboard_login_btn" type="primary" onClick={() => setShowLogIn(true)}>Login</Button>
					</div>
				}

				{ showLogIn && <LogIn onClose={() => setShowLogIn(false)} /> }
			</div>
		</div>
	)
}

export default Tools;