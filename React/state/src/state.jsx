import { useState } from 'react';

export default function State() {
    const [index, setIndex] = useState(0); // useState(0) means set the index value to 0

    const colors = ['blue', 'red', 'green'];

    const blockStyle = {
        backgroundColor: colors[index],
        width: '500px',
        height: '300px',
        marginLeft: '25vw',
    }

    function handleClick() {
        setIndex(index > 1 ? 0 : index + 1);
    }

    return (
        <>
            <button onClick={handleClick}>
                Next Index
            </button>
            <h3>  
                Index: {index}
            </h3>
            <div style={blockStyle}> </div>
        </>
    );
}
