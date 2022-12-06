import { useNavigate } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';

const Card = () => {
    const navigate = useNavigate();
    const { pokemonSpritesImg, pokemonName, pokemonIndex, pokemonTypesArray } =
        usePokemon();

    const handleNavigate = (event: any) => {
        event.preventDefault();
        navigate('/pokemon-info');
    };

    return (
        <div
            className="flex flex-col items-start justify-center mt-2 px-2 py-3 bg-pokegray-50 w-[200px] min-h-fit rounded-lg hover:cursor-pointer hover:scale-110"
            onClick={handleNavigate}
        >
            <span className="flex items-center justify-center">
                <img
                    className="w-[200px] h-[150px] object-cover"
                    src={pokemonSpritesImg}
                    alt=""
                />
            </span>
            <span className="font-flexo-md text-pokegray-100 text-md font-semibold ">
                #{pokemonIndex}
            </span>
            <span className="font-flexo-md text-pokegray-250 text-lg font-bold ">
                {pokemonName}
            </span>
            <span className="text-pokegray-250 font-flexo-md font-semibold text-sm flex">
                {pokemonTypesArray.map(
                    (pokemonTypeObject: any, index: number) => {
                        return (
                            <span
                                className="bg-lime-500 rounded p-1 mr-2"
                                key={index}
                            >
                                <span>{pokemonTypeObject}</span>
                            </span>
                        );
                    }
                )}
            </span>
        </div>
    );
};

export default Card;