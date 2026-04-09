import { useState } from "react";


const COLORS = ["Black", "Blue", "Brown", "Gray", "Green", "Orange", "Pink", "Purple", "Red", "White", "Yellow"];

export default function BgColor() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [counter, setCounter] = useState(0);

    function handleClick(color) {
        if (color !== backgroundColor) {
            setBackgroundColor(color);
            setCounter(counter + 1);
        }
    }

    return (
        <div
            className="App"
            style={{
                backgroundColor,
                minHeight: "100vh",
            }}
        >
            {COLORS.map((color) => (
                <button
                    type="button"
                    key={color}
                    onClick={() => handleClick(color)}
                    className={backgroundColor === color ? "selected" : ""}
                    style={{ marginRight: "10px" }}
                >
                    {color}
                </button>
            ))}
            <p>
                Counter: {counter}
            </p>
        </div>
    );
}
