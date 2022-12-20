import { useState, useEffect } from 'react';
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

    const addedZeroToPokemonIndex = (id: number) => {
        if (id < 100 && id < 10) {
            return '00' + id;
        } else if (id < 100 && id > 10) {
            return '0' + id;
        }
        return id;
    };

    return (
        <div className="flex flex-col">
            <span className="font-flexo-md text-pokegray-100 text-md font-semibold ">
                #{addedZeroToPokemonIndex(pokemonIndex)}
            </span>
            <span className="flex items-center justify-center mb-3 mt-3">
                <img
                    className="w-[200px] h-[150px]"
                    src={pokemonSpritesImg}
                    alt=""
                />
            </span>
            <span className="text-white flex mb-3">
                {pokemonTypesArray.map(
                    (pokemonTypeObject: any, index: number) => {
                        return (
                            <span
                                className={`${pokemonTypeObject.pokemonTypeClass} rounded-lg p-1 mr-2`}
                                key={index}
                            >
                                <span>{pokemonTypeObject.pokemonTypeName}</span>
                            </span>
                        );
                    }
                )}
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
            </span>

            <span className="flex mb-3">
                {pokemonAbilities.map((abilityName: any, index: number) => {
                    return (
                        <span
                            className="mr-2 text-pokegray-50 font-bold text-sm"
                            key={index}
                        >
                            {abilityName}
                        </span>
                    );
                })}
            </span>

            <span className="text-pokegray-50 font-bold text-sm flex mb-3">
                {pokemonMoves.map((pokemonMove: any, index: number) => {
                    return (
                        <span className="mr-2" key={index}>
                            {pokemonMove}
                        </span>
                    );
                })}
            </span>
        </div>
    );
};

export default Info;
