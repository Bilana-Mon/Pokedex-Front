import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { usePokemon } from '../hooks/usePokemon';

// const { data } = usePokemon();
// const search_parameters = Object.keys(Object.assign({}, ...data));

const Search = () => {
    const [query, setQuery] = useState('');
    // const { pokemonName } = useParams();

    // const handleSearch = (pokemons: any) => {
    //     return pokemons.filter((pokemon: any) =>
    //         search_parameters.some((parameter) =>
    //             pokemon[parameter].toString().toLowerCase().include(query)
    //         )
    //     );
    // };

    return (
        <div className="flex justify-start items-center mt-5 mb-5">
            <input
                className="text-pokegray-250 mr-3 p-1 focus:outline-none focus:ring-1 focus:ring-pokered rounded-md"
                type="search"
                placeholder="Enter Pokemon Name"
                // onChange={(event) => setQuery(event.target.value)}
            />

            <button className="font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:border-b border-b-pokered duration-300">
                Search
            </button>
            {/* onClick={handleSearch} */}
        </div>
    );
};

export default Search;
