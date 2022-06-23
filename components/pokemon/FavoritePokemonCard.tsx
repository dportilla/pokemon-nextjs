import { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

interface Props {
  pokemonId: number;
}

const FavoritePokemonCard: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavorite = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} >
      <Card isHoverable isPressable css={{ padding: 10 }} onPress={onFavorite}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
        />
      </Card>
    </Grid>
  );
};

export default FavoritePokemonCard;
