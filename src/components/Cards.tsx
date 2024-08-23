import { cardsProps } from "../utils/constants"
import Button from "./Button";
import Typography from "./Typography";
import { useNavigate } from "react-router-dom";

type CardsProps<T> = {
	cards: T[];
}

const Cards = <T extends cardsProps>({cards}: CardsProps<T>) => {
	const navigate = useNavigate();
	return (
		<div className="cards">
			{cards.map((card, index) => (
				<div className="card" key={index}>
					<div className="image_wrapper">
						<img src={card.image}></img>
					</div>
					<div className="title">
						<Typography mode="black" family="lg">{card.title}</Typography>
						<Typography mode="card" family={card.info_color}>{card.info}</Typography>
					</div>
					<Typography className="description" mode="body" family="small_l">{card.description}</Typography>
					<div className="card_buttons">
						<Button type="primary_light_blue mini" onClick={() => navigate('/tools')}>{card.button_1}</Button>
						{ card.button_2 &&  <Button type="primary_light_blue mini">{card.button_2}</Button> }
					</div>
				</div>
			))}
		</div>
	)
}

export default Cards;