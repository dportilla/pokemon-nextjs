import { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import FavoritePokemonCard from "./FavoritePokemonCard";

interface Props {
  pokemons: number[];
}

const FavoritePokemon: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
       <FavoritePokemonCard key={ id } pokemonId={ id } />
      ))
    }
    </Grid.Container>
  );
};

export default FavoritePokemon;
