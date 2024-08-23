import { ChangeEvent, FocusEvent } from "react";
import Typography from "./Typography"
import InlineAlert from "./InlineAlert";

type TextAreaProps = {
	label?: string;
	name?: string;
	placeholder?: string;
	value?: string;
	maxLength?: number;
	readOnly?: boolean;
	cols?: number;
	rows?: number;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void; 
	onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void; 
	allowResize?: boolean;
	validationMessage?: string | null;
}

const TextArea = ({ label, name, placeholder, value, maxLength, readOnly, cols, rows, onChange, allowResize, onBlur, onFocus, validationMessage }: TextAreaProps) => {
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event);
	}

	const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
		if (onBlur) {
			onBlur(event);
		}
	}

	const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
		if (onFocus) {
			onFocus(event);
		}
	}
	
	return (
		<div className="textarea_component">
			<Typography mode="grey" family="xs">
				{ label ? <div>{label}</div> : '' }
				<textarea 
					className={`${allowResize ? 'allow_resize' : ''} ${validationMessage ? 'error' : ''}`}
					name={name ?? 'TextArea'}
					placeholder={placeholder ?? 'Text Area placeholder'}
					value={value}
					maxLength={maxLength ?? 1000}
					readOnly={readOnly ?? false}
					cols={cols ?? 20}
					rows={rows ?? 5}
					spellCheck="false"
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
			</Typography>
			{validationMessage && <InlineAlert text={validationMessage} />}
		</div>
	)
}

export default TextArea