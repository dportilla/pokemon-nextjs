import React from 'react'
import { useTheme, Text, Spacer } from '@nextui-org/react'
import Image from 'next/image';
import Logo from '../../public/logo.png';

const Navbar = () => {

    const { theme } = useTheme();
 

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0.5rem 1rem',
        backgroundColor: theme?.colors.red600.value,
    }}>

        <Image 
            src={Logo}
            alt="pikachu"
            width={40}
            height={40}
        />

        <Text color='white' h2>P</Text>
        <Text color='white' h3>ókemon</Text>

        <Spacer css={{ flex: 1 }}/>

        <Text color='white' >Favoritos</Text>
    </div>
  )
}

export default Navbar