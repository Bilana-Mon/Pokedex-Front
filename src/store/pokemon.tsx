import create from 'zustand';

export const usePokemonStore = create((set, get) => {
    const initialState = {
        pokemonSprites: [],
        pokemonIndex: 0,
        pokemonName: '',
        pokemonTypes: [],
        pokemonAbilities: [],
        pokemonMoves: [],
        pokemonStats: [],
    };
    return {
        ...initialState,
        setPokemonIndex: (pokemonIndex: number) =>
            set((state: object) => ({
                ...state,
                pokemonIndex: pokemonIndex,
            })),
        setPokemonName: (pokemonName: string) =>
            set((state: object) => ({
                ...state,
                pokemonName: pokemonName,
            })),
        setPokemonAbilities: (pokemonAbilities: []) =>
            set((state: object) => ({
                ...state,
                pokemonAbilities: pokemonAbilities,
            })),
        setPokemonSprites: (pokemonSprites: []) =>
            set((state: object) => ({
                ...state,
                pokemonSprites: pokemonSprites,
            })),
        setPokemonTypes: (pokemonTypes: []) =>
            set((state: object) => ({
                ...state,
                pokemonTypes: pokemonTypes,
            })),
        setPokemonMoves: (pokemonMoves: []) =>
            set((state: object) => ({
                ...state,
                pokemonMoves: pokemonMoves,
            })),
        setPokemonStats: (pokemonStats: []) =>
            set((state: object) => ({
                ...state,
                pokemonStats: pokemonStats,
            })),
    };
});
