{/* <h1>Test title</h1> */}
{/* <svg> */}
{/*   <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" /> */}
{/* </svg> */}
{/* <form> */}
{/*   <input type="text"> */}
{/* </form> */}

function Conversion() {
    return (
        <div>
            <h1>Test title</h1>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
                <input type="text" />
            </form>
        </div>
    )
}

function Bio() {
    return (
        <>
            <div className="intro">
                <h1>Welcome to my website!</h1>
            </div><p className="summary">
                You can find my thoughts here.
                <br />
                <b>And <i>pictures</i></b> of scientists!
            </p>
        </>
    );
}

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

const person = {
    name: 'SlowerTrick',
    theme: {
        backgroundColor: 'var(--accent-bg)',
        color: 'var(--accent)'
    }
};

const today = new Date();

function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s To do List for {formatDate(today)}</h1>
            <ul>
                <li>Each chocolate (Yummy!)</li>
                <li>Go to the gym (Skip legs)</li>
                <li>Play Undetale (The best game of all time)</li>
            </ul>
        </div>
    )
}

export { Conversion, Bio, TodoList }
