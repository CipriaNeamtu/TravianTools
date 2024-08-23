import Button from "../components/Button";
import Typography from "../components/Typography";
import gearImg from "../images/gear.png";
import InfoCards from "../components/InfoCards";
import { HOME_INFO_CARDS, HOME_CARDS } from "../utils/constants";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="home_page">
			<section className="home_hero_wrapper">
				<div className="home_hero">
					<div className="hero_left">
						<div className="left_wrapper">
							<Typography mode="body" family="large_white">Explore Travian Tools & Calculators</Typography>
							<Typography className="description" mode="body" family="medium_s_white">
								Play Travian in a smart way and manage resources and troops production better! In Travian, 
								the most important resource is time, those who manage to train troops in the shortest time will win.
							</Typography>
							<Button type="secondary large" onClick={() => navigate('/tools')}>Explore now</Button>
						</div>
					</div>
					<div className="hero_right">
						<img src={gearImg}></img>
					</div>
				</div>
			</section>

			<section className="content">
				<InfoCards cards={HOME_INFO_CARDS}></InfoCards>
				<Cards cards={HOME_CARDS}></Cards>
			</section>
		</div>
	)
}

export default Home;