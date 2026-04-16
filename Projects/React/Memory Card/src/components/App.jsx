import { useState } from "react";
import DifficultySelector from "./DifficultySelector";
import Deck from "./Deck";
import Score from "./Score"
import EndScreen from "./EndScreen";
import createPokemonDeck from "../hooks/createPokemonDeck";

export default function App() {
    const SCREENS = {
        DEFAULT: "DEFAULT",
        PLAYING: "PLAYING",
        VICTORY: "VICTORY",
        DEFEAT: "DEFEAT"
    };

    const [deckSize, setDeckSize] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [screen, setScreen] = useState(SCREENS.DEFAULT);
    const [reloadDeck, setReloadDeck] = useState(0);

    const { deck, loading } = createPokemonDeck(deckSize, reloadDeck);


    function handleOnHit() {
        const nextValue = currentScore + 1;
        setCurrentScore(nextValue);

        if(nextValue == deckSize) {
            setScreen(SCREENS.VICTORY);
        }
    }

    function handleFinalScore(value) {
        setBestScore(prev => value > prev ? value : prev);
        setCurrentScore(0);

        if(screen != "Victory") {
            setScreen(SCREENS.DEFEAT);
        }
        setDeckSize(deckSize);
    }

    function handleSelectDifficulty(value) {
        setDeckSize(value);
        setScreen(SCREENS.PLAYING);
    }

    function restartGame() {
        handleFinalScore(currentScore);
        setReloadDeck(prev => !prev);
        setScreen(SCREENS.DEFAULT);
    }

    return (
        <>
            {screen === SCREENS.DEFAULT && (
                <div className="difficulty-container">
                    <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />
                </div>
            )}

            {loading && screen !== SCREENS.DEFAULT && <p className="loading">Loading...</p>}

            {screen === SCREENS.PLAYING && !loading && (
                <>
                    <Score
                        score={currentScore}
                        best={bestScore}
                        total={deckSize}
                    />

                    <Deck
                        cards={deck}
                        onHit={handleOnHit}
                        onMiss={handleFinalScore}
                    />
                </>
            )}

            {screen === SCREENS.DEFEAT && (
                <EndScreen
                    message="Game Over!"
                    onRestart={restartGame}
                />
            )}

            {screen === SCREENS.VICTORY && (
                <EndScreen
                    message="You Win!"
                    onRestart={restartGame}
                />
            )}
        </>
    );
}
