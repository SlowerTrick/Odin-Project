import { useState } from "react";

export default function Person() {
    const [person, setPerson] = useState({ firstName: "John", secondName: "Pedro", age: 100 });

    const handleIncreaseAge = () => {
        setPerson({ ...person, age: person.age + 1 });
    };

    const handleFirstName = (name) => {
        setPerson({ ...person, firstName: firstName})
    }

    return (
        <>
            <h1>{`${person.firstName} ${person.secondName}`}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    );
}
