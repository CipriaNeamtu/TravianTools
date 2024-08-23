import { useState } from "react";
import Icon from "./Icon";
import Typography from "./Typography";

type SidebarButtonTypes = {
	name: string;
	icon: string;
	onClick?: () => void;
	isButtonSelected: boolean; 
}

const SidebarButton = ({ name, icon, onClick, isButtonSelected = false }: SidebarButtonTypes) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	
	const handleMouseHover = (eventType: string) => {
		if (eventType === 'over') {
			setIsHovered(true);
		} else {
			setIsHovered(false);
		}
	}

	return (
		<div 
			className={`sidebar_button_component ${isHovered || isButtonSelected ? 'selected' : ''} `} 
			onMouseOver={() => handleMouseHover('over')} 
			onMouseOut={() => handleMouseHover('out')}
			onClick={onClick}
		>
			<div className="sidebar_button_wrapper">
				<div className="icon_button_name">
					<Icon variant={icon} color={isHovered || isButtonSelected ? 'blue' : 'grey'} />
					<Typography mode={isHovered || isButtonSelected ? 'blue' : 'grey'} family="xs">{name}</Typography>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default SidebarButton 