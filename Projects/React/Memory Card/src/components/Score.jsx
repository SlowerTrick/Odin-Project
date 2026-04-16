export default function Score({score, best, total}) {
    return (
        <div className="scoreboard">
            <p className="high-score">Best Score: {best}</p>
            <p>{score}/{total}</p>
        </div>
    )
}
