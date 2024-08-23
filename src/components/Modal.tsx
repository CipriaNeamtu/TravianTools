import { ReactNode } from "react";
import xClose from '../images/icons/x-close.svg';
import Typography from "./Typography";
import Button from "./Button";

type ModalProps = {
	children: ReactNode;
	onClose: () => void;
	title?: string;
	subtitle?: string;
	primaryBtn?: string;
	primaryBtnAction?: () => void;
	secondaryBtn?: string;
	secondaryBtnAction?: () => void;
	size?: string; 
}

const Modal = ({ children, onClose, title, subtitle, primaryBtn, primaryBtnAction, secondaryBtn, secondaryBtnAction, size }: ModalProps) => {
	return (
		<div className="modal_component">
			<div className={`modal_wrapper ${size ? size : ''}`}>
				<img className="modal_close" src={xClose} onClick={onClose} />
				<Typography className="modal_title" mode="grey" family="xl">{title}</Typography>
				<Typography className="modal_subtitle" mode="grey" family="sm">{subtitle}</Typography>
				
				{children}

				{ (primaryBtn || secondaryBtn) && 
					<div className="modal_buttons">
						{ primaryBtn && <Button type="secondary small" onClick={primaryBtnAction}>{primaryBtn}</Button> }
						{ secondaryBtn && <Button type="secondary_light_blue small" onClick={secondaryBtnAction}>{secondaryBtn}</Button> }
					</div>
				}
			</div>
		</div>
	)
}

export default Modal;