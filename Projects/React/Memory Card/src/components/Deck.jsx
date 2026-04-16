import Card from "./Card.jsx"

export default function Deck({cards}) {
    return(
        <div className="deck-container">
            {cards.map((card) => (
                <Card
                    key={card.name}
                    name={card.name}
                    image={card.sprite}
                />
            ))}
        </div>
    )
}
