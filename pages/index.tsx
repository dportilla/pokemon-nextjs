import type { NextPage } from 'next'
import { Layout } from '../components/layouts'


const Home: NextPage = () => {
  return (
    <Layout title='Pokemon List - Pokedex'>
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  )
}

export default Home
