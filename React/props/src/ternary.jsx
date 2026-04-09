function List({animals}) {
    return (
        <ul>
            {animals.map((animal) => {
                return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
            })}
        </ul>
    );
}

export default function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
}
