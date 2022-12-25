import { useState, useEffect } from 'react';
import { BarChart } from '../components/BarChart';
import { usePokemon } from '../hooks/usePokemon';

const Info = () => {
    const {
        pokemonSpritesImg,
        pokemonName,
        pokemonIndex,
        pokemonAbilities,
        pokemonStatsArrayOfObjects,
        pokemonTypesArray,
        pokemonMoves,
    } = usePokemon();
    const [chartData, setChartData] = useState({
        ...pokemonStatsArrayOfObjects,
    });

    const addedZeroToPokemonIndex = (id: number) => {
        if (id < 100 && id < 10) {
            return '00' + id;
        } else if (id < 100 && id > 10) {
            return '0' + id;
        }
        return id;
    };

    return (
        <div className="flex flex-col bg-white rounded-md min-h-screen mb-3">
            <span className="flex justify-center">
                <span className="font-flexo-md text-pokegray-250 text-lg font-semibold mr-3">
                    {pokemonName}
                </span>
                <span className="font-flexo-md text-pokegray-200 text-lg font-semibold ">
                    #{addedZeroToPokemonIndex(pokemonIndex)}
                </span>
            </span>
            <span className="flex items-center justify-center mb-3 mt-3">
                <img
                    className="w-[200px] h-[150px] rounded-md"
                    src={pokemonSpritesImg}
                    alt=""
                />
            </span>
            <span className="ml-2 flex flex-col justify-center mb-3">
                <span className="mb-3 font-flexo-md text-pokegray-250 text-lg font-semibold">
                    Type
                </span>
                <span className="font-flexo-md text-pokegray-250 text-lg font-semibold">
                    {pokemonTypesArray.map(
                        (pokemonTypeObject: any, index: number) => {
                            return (
                                <span
                                    className={`${pokemonTypeObject.pokemonTypeClass} rounded-lg p-1 mr-2`}
                                    key={index}
                                >
                                    <span>
                                        {pokemonTypeObject.pokemonTypeName}
                                    </span>
                                </span>
                            );
                        }
                    )}
                </span>
            </span>

            <span className="grid grid-rows-2 grid-cols-3 gap-3 text-pokegray-50 mb-3 font-bold text-sm">
                {pokemonStatsArrayOfObjects.map(
                    (pokemonStatsObject: any, index: number) => {
                        return (
                            <span key={index}>
                                <span className="mr-2">
                                    {pokemonStatsObject.pokemonStatName}
                                </span>
                                <span>
                                    {pokemonStatsObject.pokemonStatBase}
                                </span>
                            </span>
                        );
                    }
                )}
                {/* <BarChart chartData={chartData} /> */}
            </span>

            <span className="mx-auto w-[300px] py-3 font-flexo-md text-pokegray-250 text-lg font-semibold flex flex-col justify-center mb-3 bg-blue-500 rounded-md">
                <span className="flex justify-center items-center">
                    Abilities
                </span>
                <span className="flex justify-center items-center py-1">
                    {pokemonAbilities.map((abilityName: any, index: number) => {
                        return (
                            <span className="mr-2 text-pokegray-50" key={index}>
                                {abilityName}
                            </span>
                        );
                    })}
                </span>
            </span>

            <span className="mx-auto w-[300px] py-3 font-flexo-md text-pokegray-250 text-lg font-semibold flex flex-col justify-center mb-3 bg-red-500 rounded-md">
                <span className="flex justify-center items-center">Moves</span>
                <span className="flex flex-col justify-center items-center py-1">
                    {pokemonMoves.map((pokemonMove: any, index: number) => {
                        return (
                            <span className="mr-2 text-pokegray-50" key={index}>
                                {pokemonMove}
                            </span>
                        );
                    })}
                </span>
            </span>
        </div>
    );
};

export default Info;
