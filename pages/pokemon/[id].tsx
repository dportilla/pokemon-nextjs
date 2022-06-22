import React from 'react'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';

interface Props {
   pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {


  return (
    <Layout title={ `${ pokemon.name } - Pokedex`}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={ 12 } sm={ 4 }>
                <Card isHoverable css={{ padding: '30px'}}>
                    <Card.Body>
                        <Card.Image 
                            src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                            alt={ pokemon.name }
                            width='100%'
                            height={ 200 }
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={ 12 } sm={ 8 }>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Text h1 transform='capitalize'>{ pokemon.name }</Text>
                        <Button color='gradient' ghost>
                            Guardar en favoritos
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <Text size={ 30 }>Sprites: </Text>
                        <Container display='flex' direction='row'>
                            <Image 
                                src={ pokemon.sprites.front_default}
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image 
                                src={ pokemon.sprites.back_default}
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image 
                                src={ pokemon.sprites.front_shiny}
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image 
                                src={ pokemon.sprites.back_shiny}
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>

        </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    //const { data } = await  // your fetch function here 

    const pokemonList600 = [...Array(600)].map(( value, index) => `${ index + 1 }`)

    return {
        paths: pokemonList600.map( id => ({
            params: { id }
        })),
        fallback: false
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { id } = params as { id: string }
    const { data } = await  pokeApi.get<Pokemon>(`/pokemon/${ id }`)

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage