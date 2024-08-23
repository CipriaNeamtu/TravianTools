import Typography from "./Typography";
import { FocusEvent, ChangeEvent, useState, useEffect } from "react";
import Button from "./Button";
import InlineAlert from "./InlineAlert";

type InputProps = {
	type?: string;
	value?: string | number;
	placeholder?: string;
	variant?: 'no_border' | 'file' | 'light';
	disabled?: boolean;
	label?: string;
	className?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void; 
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void; 
	validationMessage?: string | null;
	photoName?: string | null;
	fullWidth?: boolean;
}

/**
 * @param variant Input Variants
 * @returns Input
 */
const Input = ({ 
	type, 
	value, 
	placeholder, 
	onChange, 
	onBlur,
	onFocus, 
	variant, 
	disabled = false, 
	label,
	className,
	validationMessage,
	photoName,
	fullWidth = false,
}: InputProps) => {
	const [inputFamilly, setInputFamily] = useState<string>('small_m');

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		if (onBlur) {
			onBlur(event);
		}
	}

	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		if (onFocus) {
			onFocus(event);
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event);
	}

	useEffect(() => {
		switch (variant) {
			case 'no_border':
				setInputFamily('sm');
				break;
			default:
				setInputFamily('xs');
				break;
		}
	}, [variant]);

	return (
		<div className={`input_component ${fullWidth ? 'full_width' : ''}`}>
			<Typography mode="grey" family={inputFamilly}>
				{ label && <Typography mode="grey" family="xs">{label}</Typography> }
				
				{ variant != 'file' && 
					<input
						className={`input ${variant ? variant : ''} ${className ? className : ''} ${fullWidth ? 'full_width' : ''} ${validationMessage ? 'error' : ''}`}
						type={type ? type : 'text'}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
						value={value}
						placeholder={placeholder}
						accept={type === 'file' ? 'image/*' : ''}
						disabled={disabled}
						spellCheck="false"
					/>
				}

				{	variant == 'file' &&
						<>
							<input 
								id="file"
								className={`input ${variant ? variant : ''}`}
								type="file"
								value={value}
								onChange={handleChange}
								onBlur={handleBlur}
								onFocus={handleFocus}
							/>

							<div className="photo_label">
								<label htmlFor="file">
									<Button type="primary mini">Upload Photo</Button>
								</label>
								{ photoName && <Typography mode="blue" family="xs">{photoName}</Typography> }
							</div>
						</>
				}
			</Typography>

			{ validationMessage && <InlineAlert text={validationMessage} /> }
		</div>
	)
}

export default Input;