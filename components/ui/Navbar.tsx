import React from "react";
import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0.5rem 1rem",
        backgroundColor: theme?.colors.red600.value,
      }}
    >
      <Image src={Logo} alt="pikachu" width={40} height={40} />

      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            ókemon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h4>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
