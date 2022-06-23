import { pokeApi } from "../api";
import { Pokemon } from '../interfaces/pokemon-stats';

export const getPokemonByNameOrID = async (nameOrID: string) => {

    const { data } = await pokeApi.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nameOrID}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }
}