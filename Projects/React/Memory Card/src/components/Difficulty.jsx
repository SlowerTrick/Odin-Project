export default function Difficulty({handleInput}) {
    const easy = 5;
    const medium = 10;
    const hard = 18;

    return (
        <div className="difficulty-container">
            <button className="easy" onClick={() => handleInput(easy)}>Easy</button>
            <button className="medium" onClick={() => handleInput(medium)}>Medium</button>
            <button className="hard" onClick={() => handleInput(hard)}>Hard</button>
        </div>
    )
}
