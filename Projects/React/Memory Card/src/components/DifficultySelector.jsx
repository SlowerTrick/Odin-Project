export default function DifficultySelector({ onSelectDifficulty }) {
    const difficulties = {
        Easy: 5,
        Medium: 10,
        Hard: 18
    };

    return (
        <div className="difficulty-options">
            {Object.entries(difficulties).map(([label, value]) => (
                <button
                    key={label}
                    onClick={() => onSelectDifficulty(value)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
