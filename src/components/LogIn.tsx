
import { useState } from "react";
import CustomModal from "./CustomModal";
import Input from "./Input";
import Button from "./Button";
import Alert from "./Alert";
import { useAuth, AuthProps } from "../context/auth";
import { ChangeEvent } from "react";
import Typography from "./Typography";
import { validateEmail, containsUpperCase, containsSpecialCharacter, containsNumber } from "../utils/useful-functions";
import InlineAlert from "./InlineAlert";
import Icon from "./Icon";

type LogInProps = {
	onClose: () => void;
}

const LogIn = ({ onClose }: LogInProps) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string | null>(null);
	const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
	const [passworValidationMessage, setPassworValidationMessage] = useState<string | null>(null);
	const [isLoginScreen, setIsLoginScreen] = useState<boolean>(true);
	const [emailValidationMessage, setEmailValidationMessage] = useState<string | null>(null);
	const [loginValidation, setLoginValidation] = useState<boolean>(false);
	const [showHints, setShowHints] = useState<boolean>(false);
	const [hints, setHints] = useState<boolean[]>([false, false, false, false]);
	
	const { currentUser, 
			signUp, 
			signIn, 
			signUpError, 
			setSignUpError, 
			signInError, 
			setSignInError, 
			signInWithGoogle,
			signInWIthFacebook,
			accountAlreadyExists 
		}: AuthProps = useAuth();

	const completeRegistration = () => {
		if (setSignUpError) {
			setSignUpError(null);
		}
		onClose();
	}

	const handleSignIn = async () => {
		if (emailValidationMessage || !password || isPasswordInvalid()) {
			setLoginValidation(true);
			return;
		}

		setLoginValidation(false);
		if (signIn) {
			const user = await signIn(email, password);

			if (user != undefined) {
				onClose();
			}
		}
	}

	const handleSignUp = () => {
		if (emailValidationMessage || !password || isPasswordInvalid() || passworValidationMessage) {
			setLoginValidation(true);
			return;
		}

		setLoginValidation(false);

		if (signUp) {
			signUp(email, password);
		}
	}

	const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handleSetPassword = (event: ChangeEvent<HTMLInputElement>) => {
		const pass = event.target.value;
		setPassword(pass);
		checkPasswordHints(pass);
	}

	const handleSetConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(event.target.value);
	}

	const toggleLoginScreen = () => {
		setIsLoginScreen(!isLoginScreen);
	}

	const inputsValidation = () => {
		const emailValidation = validateEmail(email);

		if (!emailValidation) {
			setEmailValidationMessage('Please enter a valid email address!');
		} else {
			setEmailValidationMessage(null);
		}
	}

	const checkPasswordHints = (password: string) => {
		const newHints = [...hints];
		
		if (password.length >= 8) {
			newHints[0] = true;
		} else {
			newHints[0] = false;
		}

		if (containsUpperCase(password)) {
			newHints[1] = true;
		} else {
			newHints[1] = false;
		}

		if (containsNumber(password)) {
			newHints[2] = true;
		} else {
			newHints[2] = false;
		}

		if (containsSpecialCharacter(password)) {
			newHints[3] = true;
		} else {
			newHints[3] = false;
		}
		
		setHints(newHints);
	}

	const isPasswordInvalid = () => {
		return hints.includes(false);
	}

	const checkPasswordMatches = () => {
		if (password === confirmPassword) {
			setPassworValidationMessage(null);
		} else {
			setPassworValidationMessage(`The password doesn't match`);
		}
	}

	const closeWarning = () => {
		if (setSignInError) {
			setSignInError(null);
		}
		onClose();
	}

	const googleSignIn = () => {
		if (signInWithGoogle) {
			signInWithGoogle();
		}
	}

	const facebookSignIn = () => {
		if (signInWIthFacebook) {
			signInWIthFacebook();
		}
	}

	return (
		<div className="login_component">	
			{	!currentUser?.uid && !signInError && !signUpError?
					<CustomModal title={isLoginScreen ? 'Login' : 'Create Account'} size="md" onClose={onClose}>
						<div className="login">
							<Button className="google_btn full_width icon_left" type="secondary_white small" icon="google" onClick={googleSignIn}>{ isLoginScreen ? 'Google Login' : 'Sign Up with Google' }</Button>
							<Button className="google_btn full_width icon_left" type="secondary_white small" icon="facebook" onClick={facebookSignIn}>{ isLoginScreen ? 'Facebook Login' : 'Sign Up with Facebook' }</Button>

							<Typography mode="blue" family="md">Or</Typography>
							
							<Input value={email} label="Email" onChange={handleSetEmail} placeholder="Email Address" onBlur={inputsValidation} validationMessage={emailValidationMessage} />
							<Input type="password" value={password ?? ''} label="Password" placeholder="Password" onChange={handleSetPassword} onFocus={() => setShowHints(true)} />
							{ !isLoginScreen && 
								<Input 
									type="password" 
									value={confirmPassword ?? ''} 
									label="Confirm Password" 
									placeholder="Confirm Password" 
									onChange={handleSetConfirmPassword} 
									onBlur={checkPasswordMatches}
									validationMessage={passworValidationMessage} /> 
							}
						</div>
						
						{ showHints &&
							<div className="password_hints">
								<div className="hint">
									<Icon variant="success" size="xs" color={hints[0] ? 'green' : 'grey'} />
									<Typography mode={hints[0] ? 'green' : 'grey'} family="xs">Have at least 8+ characters.</Typography>
								</div>
								<div className="hint">
									<Icon variant="success" size="xs" color={hints[1] ? 'green' : 'grey'} />
									<Typography mode={hints[1] ? 'green' : 'grey'} family="xs">Include at least one upper letter.</Typography>
								</div>
								<div className="hint">
									<Icon variant="success" size="xs" color={hints[2] ? 'green' : 'grey'} />
									<Typography mode={hints[2] ? 'green' : 'grey'} family="xs">Include at least one number.</Typography>
								</div>
								<div className="hint">
									<Icon variant="success" size="xs" color={hints[3] ? 'green' : 'grey'} />
									<Typography mode={hints[3] ? 'green' : 'grey'} family="xs">Include at least one special character.</Typography>
								</div>
							</div>
						}
						
						{ loginValidation && <InlineAlert className="login_validation" text="The fields were not filled properly!" /> }

						{ isLoginScreen && <Button className="login_button" type="secondary small" onClick={handleSignIn}>Login</Button> }
						{ !isLoginScreen && <Button className="login_button" type="secondary small" onClick={handleSignUp}>Sign Up</Button> }

						<div className="create_account">
							<Typography mode="grey" family="xs">{ isLoginScreen ? `Don't have an account yet?` : `Already have an account?`}</Typography>
							<Button type="text_light_blue mini" onClick={toggleLoginScreen}>{ isLoginScreen ? 'Create account' : 'Login'}</Button>
						</div>
					</CustomModal>
				: null
			}
			
			<Alert 
				title={`User created: ${currentUser?.email}`}  
				text="Congratulations, your account has been successfully created!"
				primaryBtn="Close"
				primaryBtnAction={completeRegistration}
				show={!accountAlreadyExists && currentUser?.uid ? true : false}
				onClose={completeRegistration}
			/>
			
			<Alert 
				type='warning'
				title={signUpError ?? ''}  
				text="Please try another email address!"
				primaryBtn="Try again"
				primaryBtnAction={() => setSignUpError ? setSignUpError(null) : null}
				show={(!currentUser?.uid ? true : false) && (signUpError ? true : false)}
				onClose={() => setSignUpError ? setSignUpError(null) : null}
			/>
			
			<Alert 
				type='warning'
				title={signInError ?? ''}  
				text="Please try again!"
				primaryBtn="Try again"
				primaryBtnAction={() => setSignInError ? setSignInError(null) : null}
				secondaryBtn="Close"
				secondaryBtnAction={closeWarning}
				show={signInError ? true : false}
				onClose={() => setSignInError ? setSignInError(null) : null}
			/>
		</div>
	)
}

export default LogIn;