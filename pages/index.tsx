import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'


const Home: NextPage = () => {
  return (
    <Layout title='Listado'>
      <h1>Hello Next.js</h1>
      <Button>Hola</Button>
    </Layout>
  )
}

export default Home
