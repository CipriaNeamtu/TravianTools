import { useState } from 'react';
import { useStorage, StorageProps } from '../context/storage';
import Input from '../components/Input';
import Typography from '../components/Typography';
import contactImg from '../images/svg/contact.svg';
import { ChangeEvent } from "react";
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Alert from '../components/Alert';
import useDeviceDetectService from '../services/device-detect';
import { validateEmail } from '../utils/useful-functions';
import { getCurrentDateTimeStamp } from '../services/date-service';

type ValidationProps = {
	message: string | null;
}

const Contact = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [dataValidation, setDataValidation] = useState<ValidationProps[]>([{ message: null }, { message: null }, { message: null }]);

	const { updateDataBaseWithId, updateDataBase }: StorageProps = useStorage();
	const { isScreenMini }  = useDeviceDetectService();

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	}

	const nameValidation = () => {
		const newValidation = [...dataValidation];

		if (name.length >= 2) {
			newValidation[0].message = null;
		} else {
			newValidation[0].message = 'Type minimum 2 characters.';
		}
		setDataValidation(newValidation);
	}

	const emailValidation = () => {
		const newValidation = [...dataValidation];

		if (validateEmail(email)) {
			newValidation[1].message = null;
		} else {
			newValidation[1].message = 'Please enter a valid email address!';
		}
		setDataValidation(newValidation);
	}

	const messageValidation = () => {
		const newValidation = [...dataValidation];

		if (message.length >= 50) {
			newValidation[2].message = null;
		} else {
			newValidation[2].message = 'Type minimum 50 characters.';
		}

		setDataValidation(newValidation);
	}

	const submitContactForm = async () => {
		nameValidation();
		emailValidation();
		messageValidation();
		
		const isNotValidData = dataValidation.map((data) => {
			if (data.message) {
				return false;
			}
			return true;
		}).includes(false);

		if (isNotValidData) {
			return;
		}

		const contactForm = {
			name,
			email,
			message,
			date: getCurrentDateTimeStamp(),
			id: '',
			newEntry: true,
		}

		if (updateDataBaseWithId) {
			const responseId = await updateDataBaseWithId('contact', contactForm);

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (updateDataBase && responseId) {
				contactForm.id = responseId;
				updateDataBase('contact', responseId, contactForm);
			}
		}

		setName('');
		setEmail('');
		setMessage('');
		toggleAlert();
	}

	const toggleAlert = () => {
		setShowAlert(!showAlert);
	}

	return (
		<div className="contact_page">
			{ isScreenMini && <img className='contact_image' src={contactImg}></img> }
			
			<div className="contact_wrapper">
				<div className='contact_info'>
					<Typography mode="grey" family="lg">Lets Get in 
						<Typography className='inline' mode="blue" family="lg"> Touch!</Typography>
					</Typography>
					<Typography className='form_info' mode="grey" family="xs">Have a question or need assistance? Reach out to us via the contact form below. We're eager to assist you.</Typography>
					<Typography mode="blue" family="xs">Nice hearing from you!</Typography>
				</div>
				<div className='contact_form'>
					<Input 
						className="full_width" 
						placeholder="Type your full name here" 
						value={name} label="Name" 
						onChange={handleNameChange}
						validationMessage={dataValidation[0].message}
						onBlur={nameValidation}
					/>

					<Input 
						className="full_width" 
						placeholder="Email address" 
						value={email} label="Email" 
						onChange={handleEmailChange}
						validationMessage={dataValidation[1].message}
						onBlur={emailValidation}
					/>

					<TextArea 
						value={message} 
						placeholder="Type your message here" 
						label="Message" 
						onChange={handleMessageChange}
						validationMessage={dataValidation[2].message}
						onBlur={messageValidation}
					/>
					<Button type='primary' onClick={submitContactForm}>Submit</Button>
				</div>
				{ !isScreenMini && <img className='contact_image' src={contactImg}></img> }
			</div>
			
			<Alert 
				title="Submitted Form" 
				text="Your message was sent successfully, we'll come back soon with an answer!" 
				onClose={toggleAlert}
				show={showAlert}
				primaryBtn="Close"
				primaryBtnAction={toggleAlert}
			/>
		</div>
	)
}

export default Contact;