import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { copyTextToClipboard } from '../services/clipboard-copy';
import Button from './Button';
import { useEffect, useState } from 'react';

type SyntaxProps = {
	code: string;
	buttonText?: string;
	defaultState: boolean;
	reselect: () => void;
}

const Syntax = ({ code, buttonText, defaultState, reselect }: SyntaxProps ) => {
	const [localButtonText, setLocalButtonText] = useState<string>(buttonText || 'Copy code');

	const handleButtonText = () => {
		setLocalButtonText('Copied!');
		copyTextToClipboard(code);
		reselect();
	}

	useEffect(() => {
		if (defaultState) {
			if (buttonText) {
				setLocalButtonText(buttonText);
				return;
			} 
			setLocalButtonText('Copy code');
		}
	},[defaultState, buttonText])

	return (
		<div className='syntax_highlighter'>
			<SyntaxHighlighter className="test" language="javascript">
				{code}
			</SyntaxHighlighter>

			<Button type='primary' onClick={handleButtonText} icon={localButtonText === 'Copied!' ? 'success' : 'copy'}>{ localButtonText }</Button>
		</div>
	)
}

export default Syntax