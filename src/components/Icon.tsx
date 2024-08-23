import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown, Copy, Success, Home, About, Dashboard, Contact, Admin, Info, 
		Google, SearchLight, Trash, PayPal, Facebook, Tools, Troops, TroopsCost, 
		ResourcesManager, NpcCalculator, CulturePoints, MobileNavigation, Users, ReactIcon, Subscribers, ContactForm, 
		Grain,
		Add} from "./SvgBase"

type IconProps = {
	color?: string | 'white' | 'blue' | 'red' | 'green' | 'yellow';
	fill?: string;
	variant: string;
	size?: string;
	className?: string;
	onClick?: () => void;
}
/**
 * 
 * @param variant |'arrow-up' | 'arrow-down' | 'copy' | 'success' | 'home-icon' | 'about' | 'dashboard' | 'contact' | 'info' & others;
 * @returns 
 */
const Icon = ({ color, fill, variant, size, className, onClick }: IconProps) => {
	const [localColor, setLocalColor] = useState<string>('');

	useEffect(() => {
		switch(color) {
			case 'white':
				setLocalColor('#FFFFFF');
				break;
			case 'grey':
				setLocalColor('#475E69');
				break;
			case 'blue':
				setLocalColor('#0086D6');
				break;
			case 'red':
				setLocalColor('#FF3366');
				break;
			case 'green':
				setLocalColor('#06856F');
				break;
			case 'yellow':
				setLocalColor('#FFC942');
				break;
			default:
				setLocalColor('#333E44');
		}
	},[color])

	return (
		<div className={`icon_component ${className ?? ''} ${size ?? ''}`} onClick={onClick}>
			{ variant === 'arrow-up' && <ArrowUp fill={fill} stroke={localColor} /> }
			{ variant === 'arrow-down' && <ArrowDown fill={fill} stroke={localColor} /> }
			{ variant === 'copy' && <Copy fill={fill} stroke={localColor} /> }
			{ variant === 'success' && <Success fill={fill} stroke={localColor} /> }
			{ variant === 'home' && <Home fill={fill} stroke={localColor}/> }
			{ variant === 'about' && <About fill={fill} stroke={localColor} /> }
			{ variant === 'dashboard' && <Dashboard fill={localColor} stroke={localColor} /> }
			{ variant === 'contact' && <Contact fill={localColor} /> }
			{ variant === 'admin' && <Admin fill={localColor} /> }
			{ variant === 'info' && <Info fill={fill} stroke={localColor} /> }
			{ variant === 'google' && <Google /> }
			{ variant === 'facebook' && <Facebook /> }
			{ variant === 'light-search' && <SearchLight fill={fill} stroke={localColor} /> }
			{ variant === 'trash' && <Trash fill={fill} stroke={localColor} /> }
			{ variant === 'paypal' && <PayPal /> }
			{ variant === 'tools' && <Tools fill={localColor} /> }
			{ variant === 'troops' && <Troops fill={localColor} /> }
			{ variant === 'troops-cost' && <TroopsCost fill={localColor} /> }
			{ variant === 'resources-manager' && <ResourcesManager fill={localColor} /> }
			{ variant === 'npc-calculator' && <NpcCalculator fill={localColor} /> }
			{ variant === 'culture-points' && <CulturePoints fill={localColor} /> }
			{ variant === 'mobile-navigation' && <MobileNavigation fill={localColor} /> }
			{ variant === 'users' && <Users fill={localColor} /> }
			{ variant === 'react' && <ReactIcon /> }
			{ variant === 'subscribers' && <Subscribers fill={localColor} /> }
			{ variant === 'contact-form' && <ContactForm fill={localColor} /> }
			{ variant === 'grain' && <Grain fill={localColor} /> }
			{ variant === 'add' && <Add fill={localColor} /> }
		</div>
	)
}

export default Icon