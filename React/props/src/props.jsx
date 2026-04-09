// Full Obj Version
function Button(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    };

    return (
        <button style={buttonStyle}>{props.text}</button>
    );
}

// Destructuring Version
function Button2({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>;
}

// Default Values Version
function Button3({ text = "Click Me!", color = "blue", fontSize = 12 }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>;
}

// Callbacks
function ButtonCallback({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default function App() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return (
        <>
            <div>
                <Button text="Click Me!" color="blue" fontSize={12} />
                <Button text="Don't Click Me!" color="red" fontSize={12} />
                <Button text="Click Me!" color="blue" fontSize={20} />
            </div>
            <div>
                <Button2 text="Click Me!" color="blue" fontSize={12} />
                <Button2 text="Don't Click Me!" color="red" fontSize={12} />
                <Button2 text="Click Me!" color="blue" fontSize={20} />
            </div>
            <div>
                <Button3 />
                <Button3 text="Don't Click Me!" color="red" />
                <Button3 fontSize={20} />
            </div>
            <div>
                <ButtonCallback handleClick={() => handleButtonClick('https://www.theodinproject.com')} 
                text="Learn!" 
                color="green" />
            </div>
        </>
    );
}
