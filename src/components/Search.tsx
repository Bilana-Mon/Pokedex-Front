import { useState } from 'react';
import { useParams } from 'react-router';
import { usePokemon } from '../hooks/usePokemon';

const Search = () => {
    const [input, setInput] = useState({
        pokemonName: '',
    });

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput((values) => ({
            ...values,
            [name]: value,
        }));
        console.log(value);
    };

    const handleSearch = (event: any) => {
        event.preventDefault();
        const pokemonName = input.pokemonName;
        console.log(pokemonName);
    };

    return (
        <div className="flex justify-start items-center mt-5 mb-5">
            <input
                className="text-pokegray-250 mr-3 p-1 focus:outline-none focus:ring-1 focus:ring-pokered rounded-md"
                type="search"
                placeholder="Enter Pokemon Name"
                name="pokemonName"
                value={input.pokemonName}
                onChange={handleChange}
            />

            <button
                className="font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:border-b border-b-pokered duration-300"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
