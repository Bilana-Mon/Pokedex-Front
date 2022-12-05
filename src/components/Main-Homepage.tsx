import { useState, useEffect } from 'react';
import { usePokemon } from '../hooks/usePokemon';

const Homepage = () => {
    const {
        pokemonSpritesImgs,
        pokemonName,
        pokemonIndex,
        pokemonAbilities,
        pokemonStatsArrayOfObjects,
        pokemonTypesArray,
        pokemonMoves,
    } = usePokemon();

    return (
        <div className="flex flex-col">
            <span className="grid grid-rows-1 grid-flow-col gap-1">
                {pokemonSpritesImgs.map(
                    (pokemonSpriteImg: any, index: number) => {
                        return (
                            <span key={index}>
                                <img
                                    className="w-[100px] h-[100px]"
                                    src={pokemonSpriteImg}
                                    alt=""
                                />
                            </span>
                        );
                    }
                )}
            </span>
            <span className="text-white ">{pokemonName}</span>
            <span className="text-white ">{pokemonIndex}</span>
            <span className="text-white "></span>
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

            <span className="grid grid-rows-1 grid-flow-col gap-1">
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

export default Homepage;
