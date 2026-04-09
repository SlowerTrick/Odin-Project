import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
    const [query, setQuery] = useState('');

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query={query} handler={handleChange} />
            <hr />
            <p> Query: {query} </p>
            <hr />
            <List query={query} items={foods} />
        </>
    );
}

function SearchBar({query, handler}) {
    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={handler}
            />
        </label>
    );
}

function List({ query, items }) {

    const filteredItems = filterItems(items, query);

    return (
        <table>
            <tbody>
                {filteredItems.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
