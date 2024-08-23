import { ReactNode, useEffect, useState } from "react";
import Typography from "./Typography";
import Icon from "./Icon";

type ButtonProps = {
	children: ReactNode;
	type?: string;
	onClick?: () => void;
	className?: string;
	icon?: string;
	iconColor?: 'white' | 'blue' | 'red' | 'green' | 'yellow';
}

/**
 * Button types
 * Colors: black | white | grey | red | yellow | green | light_blue
 * Example: primary_red
 * 
 * Sizes: mini | small | medium | large
 * Example: primary_green small | secondary large
 * 
 * Icons: 'arrow-up' | 'arrow-down' | 'copy' | 'success' and others;
 * 
 * @param type primary | secondary | text
 * @returns 
 */
const Button = ({ children, type, onClick, className, icon, iconColor }: ButtonProps) => {
	const [mode, setMode] = useState<string>('');
	const [family, setFamily] = useState<string>('');

	useEffect(() => {
		switch(type) {
			case 'text_red':
			case 'text_red mini':
			case 'text_red small':
			case 'text_red medium':
			case 'text_red large':
				setMode('red');
				break;

			case 'text_black':
			case 'text_black mini':
			case 'text_black small':
			case 'text_black medium':
			case 'text_black large':
				setMode('black');
				break;

			case 'text_yellow':
			case 'text_yellow mini':
			case 'text_yellow small':
			case 'text_yellow medium':
			case 'text_yellow large':
				setMode('yellow');
				break;

			case 'text_green':
			case 'text_green mini':
			case 'text_green small':
			case 'text_green medium':
			case 'text_green large':
				setMode('green');
				break;

			case 'text_light_blue':
			case 'text_light_blue mini':
			case 'text_light_blue small':
			case 'text_light_blue medium':
			case 'text_light_blue large':
			case 'primary_light_blue':
			case 'primary_light_blue mini':
			case 'primary_light_blue small':
			case 'primary_light_blue medium':
			case 'primary_light_blue large':
			case 'secondary_light_blue':
			case 'secondary_light_blue mini':
			case 'secondary_light_blue small':
			case 'secondary_light_blue medium':
			case 'secondary_light_blue large':
				setMode('blue');
				break;
				
			case 'text_grey':
			case 'text_grey mini':
			case 'text_grey small':
			case 'text_grey medium':
			case 'text_grey large':
			case 'primary_white':
			case 'primary_white mini':
			case 'primary_white small':
			case 'primary_white medium':
			case 'primary_white large':
			case 'secondary_white':
			case 'secondary_white mini':
			case 'secondary_white small':
			case 'secondary_white medium':
			case 'secondary_white large':
				setMode('grey');
				break;

			default:
				setMode('white');
				break;
		}

		switch(type) {
			case 'text large':
			case 'text_red large':
			case 'text_green large':
			case 'text_yellow large':
			case 'text_black large':
			case 'text_grey large':
			case 'text_white large':
			case 'text_light_blue large':
			case 'primary large':
			case 'primary_red large':
			case 'primary_green large':
			case 'primary_yellow large':
			case 'primary_black large':
			case 'primary_grey large':
			case 'primary_white large':
			case 'primary_light_blue large':
			case 'secondary large':
			case 'secondary_red large':
			case 'secondary_green large':
			case 'secondary_yellow large':
			case 'secondary_black large':
			case 'secondary_grey large':
			case 'secondary_white large':
			case 'secondary_light_blue large':
				setFamily('lg')
				break;

			case 'text medium':
			case 'text_red medium':
			case 'text_green medium':
			case 'text_yellow medium':
			case 'text_black medium':
			case 'text_grey medium':
			case 'text_white medium':
			case 'text_light_blue medium':
			case 'primary medium':
			case 'primary_red medium':
			case 'primary_green medium':
			case 'primary_yellow medium':
			case 'primary_black medium':
			case 'primary_grey medium':
			case 'primary_white medium':
			case 'primary_light_blue medium':
			case 'secondary medium':
			case 'secondary_red medium':
			case 'secondary_green medium':
			case 'secondary_yellow medium':
			case 'secondary_black medium':
			case 'secondary_grey medium':
			case 'secondary_white medium':
			case 'secondary_light_blue medium':
				setFamily('md')
				break;

			case 'text mini':
			case 'text_red mini':
			case 'text_green mini':
			case 'text_yellow mini':
			case 'text_black mini':
			case 'text_grey mini':
			case 'text_white mini':
			case 'text_light_blue mini':
			case 'primary mini':
			case 'primary_red mini':
			case 'primary_green mini':
			case 'primary_yellow mini':
			case 'primary_black mini':
			case 'primary_grey mini':
			case 'primary_white mini':
			case 'primary_light_blue mini':
			case 'secondary mini':
			case 'secondary_red mini':
			case 'secondary_green mini':
			case 'secondary_yellow mini':
			case 'secondary_black mini':
			case 'secondary_grey mini':
			case 'secondary_white mini':
			case 'secondary_light_blue mini':
				setFamily('xs')
				break;

			default:
				setFamily('sm')
				break;
		}
	}, [type])

	return (
		<div className={`button_component ${type ? type : ''} ${className ? className : ''}`} onClick={onClick}>
			<Typography mode={mode} family={family}> {children}</Typography>
			{ icon && <Icon variant={icon} color={iconColor ?? 'white'} /> } 
		</div>
	)
}

export default Button;