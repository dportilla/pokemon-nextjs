import React from 'react'
import Image from "next/image";
import { Container, Text } from '@nextui-org/react';
import PikaImage from "../../public/pika.gif";

const NoFavorites = () => {
  return (
    <Container
        css={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text h1 css={{ marginBottom: "20px" }}> No hay favoritos </Text>
        <Image src={PikaImage} alt='Pikachu' width={250} height={250} />
      </Container>
  )
}

export default NoFavorites