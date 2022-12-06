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
    return (
        <div>
            <span className="text-white flex ">
                {pokemonTypesArray.map(
                    (pokemonTypeObject: any, index: number) => {
                        return (
                            <span className="mr-2" key={index}>
                                <span>{pokemonTypeObject}</span>
                            </span>
                        );
                    }
                )}
            </span>

            <span className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-1">
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

            <span>
                {pokemonAbilities.map((abilityName: any, index: number) => {
                    return (
                        <span className="mr-2" key={index}>
                            {abilityName}
                        </span>
                    );
                })}
            </span>

            <span>
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
