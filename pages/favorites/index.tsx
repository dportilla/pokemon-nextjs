import { useState, useEffect } from "react";

import { Layout } from "../../components/layouts";
import FavoritePokemon from "../../components/pokemon/FavoritePokemon";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites - Pokedex">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemon pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
