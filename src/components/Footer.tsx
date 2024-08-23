import Typography from "./Typography";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { FOOTER_LINKS } from "../utils/constants";
import logoCNWSwhite from "../images/logo/logo-cnws-white.svg";
// import facebookIcon from "../images/svg/social-media/facebook.svg";
// import instagramIcon from "../images/svg/social-media/instagram.svg";
// import twitterIcon from "../images/svg/social-media/twitter.svg";
import { ChangeEvent } from "react";
import { useStorage, StorageProps } from "../context/storage";
import { useAuth, AuthProps } from "../context/auth";
import Alert from "./Alert";
import { validateEmail, scrollToTop } from "../utils/useful-functions";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const { updateDataBase }: StorageProps = useStorage();
	const { currentUser }: AuthProps = useAuth();

	const [inputValue, setInputValue] = useState<string>('');
	const [showSubscribeAlert, setShowSubscribeAlert] = useState<boolean>(false);
	const [emailValidationMessage, setEmailValidationMessage] = useState<string | null>(null);

	const navigate = useNavigate();
	
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	}

	const subscribe = () => {
		const email = currentUser?.email ?? inputValue;
		const user = currentUser?.displayName ?? 'Unknown';

		if (!validateEmail(email)) {
			setEmailValidationMessage('Please enter a valid email address!')
			return;
		} else {
			setEmailValidationMessage(null)
		}
		
		let reference = inputValue;
		if (currentUser?.uid && currentUser.email) {
			reference = currentUser.email;
		}

		if (updateDataBase) {
			updateDataBase('subscribe', reference, { user, email });
			setShowSubscribeAlert(true);
		} 
	}

	const closeSubscribeAlert = () => {
		setInputValue('');
		setShowSubscribeAlert(false);
	}

	const goTo = (link: string) => {
		navigate(link);
		scrollToTop();
	} 

	return (
		<div className="footer">
			<section className="subscribe">
				<Typography mode="body" family="large_s_white">Subscribe</Typography>
				<Typography className="subtitle" mode="body" family="medium_xs_white">Subscribe to get exclusive news & offer</Typography>
				<div className="action">
					{	!currentUser?.uid && 
						<Input 
							value={inputValue} 
							placeholder="Email address" 
							onChange={handleInputChange}
							validationMessage={emailValidationMessage} 
						/>
					}
					<Button type="primary" onClick={subscribe}>Subscribe</Button>
				</div>
			</section>

			<section className="links">
				<div className="quick_links">
					<div className="media">
						<div className="logo">
							<img src={logoCNWSwhite}></img>
							<Typography mode="body" family="medium_xl_white">CNWS</Typography>
						</div>
						{/* <div className="social_media">
							<img src={facebookIcon}></img>
							<img src={instagramIcon}></img>
							<img src={twitterIcon}></img>
						</div> */}
					</div>

					{FOOTER_LINKS.map((linkGroup, index) => (
						<div key={index}>
							<Typography mode="body" family="medium_mm_white">{linkGroup.title}</Typography>
							{linkGroup.links.map((link, index) => (
								<div key={index}>
									{ link.name != 'Donate' && 
										<Typography className="footer_link" mode="body" family="small_m_white" onClick={() => goTo(link.link)}>{link.name}</Typography>
									}

									{ link.name === 'Donate' && 
										<a href="https://www.paypal.com/paypalme/cnwstrav" target="_blank">
											<Button className="donate_btn" type="primary_yellow small" icon="paypal">Donate</Button>
										</a>
									}
								</div>
							))}
						</div>
					))}
				</div>
				<div className="site_info">
					<Typography mode="body" family="small_mm_white">Made By CNWS All Right Reserved - 2024</Typography>
				</div>
			</section>
			
			<Alert 
				title="Subscribe Status" 
				text={`Congratulations, your email address has been successfully subscribed to the news we offer!`} 
				show={showSubscribeAlert}
				onClose={closeSubscribeAlert} 
				primaryBtn="Close"
				primaryBtnAction={closeSubscribeAlert}
			/>
		</div>
	)
};

export default Footer;
