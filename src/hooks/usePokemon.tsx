import { useEffect, useState } from 'react';
import { usePokemonStore } from '../store';

const ENDPOINT = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;

export const usePokemon = () => {
    const pokemonStore: any = usePokemonStore();

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonResponse = await fetch(ENDPOINT, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const pokemonPayload = await pokemonResponse.json();

            const pokemonSpritesPayload = pokemonPayload.sprites;
            const pokemonSpritesArrayValues = Object.values(
                pokemonSpritesPayload
            );
            const pokemonSpritesArray = pokemonSpritesArrayValues.slice(0, -2);
            const filteredPokemonSpritesArray = pokemonSpritesArray.filter(
                (pokemonSprite: any) => {
                    return pokemonSprite !== null;
                }
            );
            pokemonStore.setPokemonSprites(filteredPokemonSpritesArray);

            pokemonStore.setPokemonIndex(pokemonPayload.id);

            pokemonStore.setPokemonName(pokemonPayload.name);

            const pokemonTypesPayload = pokemonPayload.types;
            const pokemonTypes = pokemonTypesPayload.map((pokemonType: any) => {
                const pokemonTypeName = pokemonType.type.name;
                return pokemonTypeName;
            });
            pokemonStore.setPokemonTypes(pokemonTypes);

            const pokemonStatsPayload = pokemonPayload.stats;
            const pokemonStatsArray = pokemonStatsPayload.map(
                (pokemonStat: any) => {
                    const pokemonStatValues = { ...pokemonStat };
                    const pokemonStatName = pokemonStatValues.stat.name;
                    const pokemonStatBase = pokemonStatValues.base_stat;
                    return { pokemonStatName, pokemonStatBase };
                }
            );
            pokemonStore.setPokemonStats(pokemonStatsArray);

            const pokemonAbilitiesArray = [...pokemonPayload.abilities];
            const abilitiesNameArray = pokemonAbilitiesArray.map(
                (abilityName: any) => {
                    return abilityName.ability.name;
                }
            );
            pokemonStore.setPokemonAbilities(abilitiesNameArray);

            const pokemonMovesPayload = pokemonPayload.moves;
            const pokemonMovesArray = pokemonMovesPayload
                .slice(0, 3)
                .map((pokemonMove: any) => {
                    const pokemonMovesValue = { ...pokemonMove };
                    const pokemonMoveName = pokemonMovesValue.move.name;
                    return pokemonMoveName;
                });
            pokemonStore.setPokemonMoves(pokemonMovesArray);

            console.log(pokemonPayload);
        };
        fetchPokemons();
    }, []);

    const setPokemonName = (pokemonName: string) =>
        pokemonStore.setPokemonName(pokemonName);

    const setPokemonIndex = (pokemonIndex: number) =>
        pokemonStore.setPokemonIndex(pokemonIndex);

    const setPokemonAbilities = (pokemonAbilities: []) =>
        pokemonStore.setPokemonAbilities(pokemonAbilities);

    const setPokemonSprites = (pokemonSprites: []) =>
        pokemonStore.setPokemonSprites(pokemonSprites);

    const setPokemonStats = (pokemonStats: []) =>
        pokemonStore.setPokemonStats(pokemonStats);

    const setPokemonTypes = (pokemonTypes: []) =>
        pokemonStore.setPokemonTypes(pokemonTypes);

    const setPokemonMoves = (pokemonMoves: []) =>
        pokemonStore.setPokemonMoves(pokemonMoves);

    const pokemonSpritesImgs = pokemonStore.pokemonSprites;
    const pokemonIndex = pokemonStore.pokemonIndex;
    const pokemonName = pokemonStore.pokemonName;
    const pokemonAbilities = pokemonStore.pokemonAbilities;
    const pokemonStatsArrayOfObjects = pokemonStore.pokemonStats;
    const pokemonTypesArray = pokemonStore.pokemonTypes;
    const pokemonMoves = pokemonStore.pokemonMoves;

    return {
        setPokemonIndex,
        setPokemonName,
        setPokemonAbilities,
        setPokemonSprites,
        setPokemonStats,
        setPokemonTypes,
        setPokemonMoves,
        pokemonName,
        pokemonIndex,
        pokemonAbilities,
        pokemonSpritesImgs,
        pokemonStatsArrayOfObjects,
        pokemonTypesArray,
        pokemonMoves,
    };
};
