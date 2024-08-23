import { homeInfoCardsProps } from "../utils/constants"
import Typography from "./Typography";

type infoCardsProps<T> = {
    cards: T[];
}

/**
 * Will return three info cards
 * @param cards list
 * @returns 
 */
const infoCards = <T extends homeInfoCardsProps>({cards}: infoCardsProps<T>) => {
    return (
        <div className="info_cards">
            {cards.map((card, index) => (
                <div className="card text_center" key={index}>
                    <Typography mode="card" family={card.title_color}>{card.title}</Typography>
                    <Typography className="subtitle" mode="body" family="medium_l">{card.subtitle}</Typography>
                    <Typography className="description" mode="body" family="medium_s">{card.description}</Typography>
                </div>
            ))}
        </div>
    )
}

export default infoCards;