import xClose from '../images/icons/x-close.svg';
import greenCheck from '../images/icons/success.svg';
import warningCheck from '../images/icons/warning.svg';
import Typography from './Typography';
import Button from './Button';
import { useEffect, useState } from 'react';

type AlertProps = {
	type?: string;
	title?: string;
	text?: string;
	show?: boolean;
	onClose: () => void;
	primaryBtn?: string;
	primaryBtnAction?: () => void;
	secondaryBtn?: string;
	secondaryBtnAction?: () => void;
}

const Alert = ({ type, title, text, show = false, onClose, primaryBtn, primaryBtnAction, secondaryBtn, secondaryBtnAction }: AlertProps) => {
	const [iconType, setIconType] = useState<string>('');
	
	useEffect(() => {
		switch(type) {
			case 'warning':
				setIconType(warningCheck);
				break;
			default:
				setIconType(greenCheck);
				break;
		}
	},[type])

	return (
		<div className={`alert ${show ? 'show' : 'hide'}`}>
			<div className="alert_wrapper">
				<img className='close' src={xClose} onClick={onClose} />
				<img className='icon' src={iconType} />
				<Typography className='title' mode="black" family="md">{title ? title : 'Alert Title'}</Typography>
				<Typography className='text text_center' mode="grey" family="xs">{text ? text : 'Alert Text'}</Typography>
				
				<div className="alert_buttons">
					{ primaryBtn && <Button className='full_width' type="secondary small" onClick={primaryBtnAction}>{primaryBtn}</Button> }
					{ secondaryBtn && <Button className='full_width' type="secondary_light_blue small" onClick={secondaryBtnAction}>{secondaryBtn}</Button> }
				</div>
			</div>
		</div>
	)
}

export default Alert;