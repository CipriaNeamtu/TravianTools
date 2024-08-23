import ProfilePicture from "../components/ProfilePicture";
import Typography from "../components/Typography";
// import ciprianNeamtuImg from "../images/team/ciprian_neamtu.png";
import logoCNWS from "../images/logo/logo-cnws.svg";

const About = () => {
	return (
		<div className="about_page">
			<Typography className="text_center" mode="grey" family="2xl">
				We create Tools & Calculators
				<Typography className="inline" mode="blue" family="2xl"> to help the Travian community!</Typography>
			</Typography>

			<div className="team">
				<Typography mode="black" family="xl">Tools & Calculators offered by</Typography>

				<ProfilePicture img={logoCNWS} type="view_only_large" />

				<Typography className="name" mode="black" family="lg">CNWS Team</Typography>
				
				<div className="description">
					<Typography className="note" mode="red" family="xs">Note*: This website it's in the BETA version, therefore, you may encounter some errors in some functionalities. 
					Also, the version for mobile devices is not finished yet. Please send us through the contact form any suggestions or bugs encountered, thank you!</Typography>
					<Typography mode="grey" family="sm">Travian Tools & Calculators is the first project developed by CNWS. Here you will 
						find tools that will help you improve your play style, you will be able to create bigger armies and manage your Travian accounts more easily.
					</Typography>
					<Typography mode="grey" family="sm">Tools can be used by all players, no matter if you play with or without gold, and
						in essence, a correct use of them can save you from consuming a nice amount of gold.
					</Typography>
					<Typography mode="grey" family="sm">The tools were created to maximize the potential of an account from all points of 
						view, resource development, population, culture points and finally, proper training of troops.
					</Typography>
					<Typography mode="grey" family="sm">In Travian, the most important resource is time, those who manage to train troops 
						in the shortest time will win. Here you have the opportunity to learn how to develop villages faster and also produce troops non-stop.
					</Typography>
				</div>


			</div>
		</div>
	)
}

export default About;