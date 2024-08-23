import { ReactNode } from "react";

type TypographyProps = {
	children: ReactNode;
	className?: string;
	mode: string;
	family: string;
	onClick?: () => void;
}

const Typography = ({ children, className, mode, family, onClick }: TypographyProps) => {
	return (
		<div className={`typography_component ${className ? className : ''} ${mode}_${family}`} onClick={onClick}>
			{children}
		</div>
	)
};

export default Typography;
