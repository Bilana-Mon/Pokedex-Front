import { useEffect, useState } from 'react';
import { usePokemonStore } from '../store';

export const usePokemon = () => {
    const [msgError, setMsgError] = useState('');
    const pokemonStore: any = usePokemonStore();

    useEffect(() => {
        const fetchPokemons = async (query: string) => {
            const ENDPOINT = `https://pokeapi.co/api/v2/pokemon/${query}`;
            const pokemonResponse = await fetch(ENDPOINT, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (
                pokemonResponse.status === 404 ||
                pokemonResponse.statusText === 'Not Found'
            ) {
                setMsgError('Pokemon Not Found');
                return;
            }

            const pokemonPayload = await pokemonResponse.json();

            const pokemonSpritesPayload =
                pokemonPayload.sprites.other.dream_world;
            const pokemonSprite = pokemonSpritesPayload.front_default;
            pokemonStore.setPokemonSprites(pokemonSprite);

            pokemonStore.setPokemonIndex(pokemonPayload.id);

            const pokemonNamePoayload = pokemonPayload.name;
            const pokemonName =
                pokemonNamePoayload.charAt(0).toUpperCase() +
                pokemonNamePoayload.slice(1);
            pokemonStore.setPokemonName(pokemonName);

            const pokemonTypesPayload = pokemonPayload.types;
            const pokemonTypes = pokemonTypesPayload.map((pokemonType: any) => {
                const pokemonTypeNamePayload = pokemonType.type.name;
                const pokemonTypeName =
                    pokemonTypeNamePayload.charAt(0).toUpperCase() +
                    pokemonTypeNamePayload.slice(1);
                const pokemonTypeClass = pokemonTypeNamePayload;
                return { pokemonTypeName, pokemonTypeClass };
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
        };
        fetchPokemons('bulbasaur');
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

    const pokemonSpritesImg = pokemonStore.pokemonSprites;
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
        pokemonSpritesImg,
        pokemonStatsArrayOfObjects,
        pokemonTypesArray,
        pokemonMoves,
    };
};
