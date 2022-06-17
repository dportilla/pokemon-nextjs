import { useTheme } from '@nextui-org/react'
import React from 'react'

const Navbar = () => {

    const { theme } = useTheme();
    console.log(theme);

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0.5rem 1rem',
        backgroundColor: theme?.colors.gray900.value,
    }}>

        <span>holaaa</span>
    </div>
  )
}

export default Navbar