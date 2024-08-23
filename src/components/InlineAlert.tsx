import { useEffect, useState } from "react";
import Typography from "./Typography";
import Icon from "./Icon";

type InlineAlertProps = {
	type?: string;
	size?: string;
	text: string;
	className?: string;
}

const InlineAlert = ({ type, size, text, className }: InlineAlertProps) => {	
	const [localType, setLocalType] = useState<string>('red');
	
	useEffect(() => {

		switch(type) {
			case 'success':
				setLocalType('green');
				break;
			case 'warning':
				setLocalType('yellow');
				break;
			default:
				setLocalType('red');
				break;
		}
	}, [type]);
	
	return (
		<div className={`inline_alert_component ${className ? className : ''}`}>
			<Icon variant="info" color={localType} size={size ?? 'xs'} />
			<Typography mode={localType} family={size ?? '2xs'}>{text}</Typography>
		</div>
	)
}

export default InlineAlert