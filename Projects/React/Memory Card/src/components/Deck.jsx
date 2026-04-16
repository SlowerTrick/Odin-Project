import { useState } from "react";
import Card from "./Card";
import Shuffle from "../functions/Shuffle";

export default function Deck({cards, onHit, onMiss}) {
    const [clicked, setClicked] = useState(new Set());

    function handleClick(name) {
        if(!clicked.has(name)) {
            onHit();
            setClicked(prev => new Set([...prev, name]));
            Shuffle(cards);
            return;
        }
        onMiss(clicked.size);
    }

    return (
        <div className="deck-container">
            {cards.map(card => (
                <Card
                    key={card.name}
                    name={card.name}
                    image={card.sprite}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
}
