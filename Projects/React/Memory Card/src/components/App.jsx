import { useEffect, useState } from 'react';
import RandomPokemon from '../functions/Pokemon'
import Difficulty from './Difficulty';
import Deck from './Deck';

export default function App() {
    const [list, setList] = useState([]);
    const [deckSize, setDeckSize] = useState(0);
    const [loading, setLoading] = useState(false); // Api protection

    function handleInput(value) {
        if (loading) return;

        setDeckSize(value);
    }

    useEffect(() => {
        async function fetchPokemon() {
            try {
                setLoading(true);

                const usedNames = new Set();
                const pokemons = [];

                while (pokemons.length < deckSize) {
                    const data = await RandomPokemon();

                    if (!usedNames.has(data.name)) {
                        usedNames.add(data.name);
                        pokemons.push(data);
                    }
                }

                setList(pokemons);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                setLoading(false);
            }
        }
        if (deckSize > 0) {
            fetchPokemon();
        }
    }, [deckSize]);

    return(
        <>
            <Difficulty handleInput={handleInput}/>
            {list.length > 0 && (
                <Deck cards={list} />
            )}
        </>
    )
}
