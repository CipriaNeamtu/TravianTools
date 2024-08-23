import { ReactNode } from "react";
import xClose from '../images/icons/x-close.svg';
import Typography from "./Typography";
import { AuthProps, useAuth } from "../context/auth";

type CustomModalProps = {
	children: ReactNode;
	onClose: () => void;
	title?: string;
	size?: string; 
}

const CustomModal = ({ children, onClose, title, size }: CustomModalProps) => {
	const { currentUser }: AuthProps = useAuth();

	return (
		<div className={`custom_modal_component ${!currentUser?.emailVerified ? 'verified' : ''}`}>
			<div className={`custom_modal_wrapper ${size ? size : ''}`}>
				<img className="close" src={xClose} onClick={onClose} />
				<Typography className="title" mode="body" family="medium_xl">{title}</Typography>
				{children}
			</div>
		</div>
	)
}

export default CustomModal;