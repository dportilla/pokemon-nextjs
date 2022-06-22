import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";

type Props = {
    title?: string;
    children?: React.ReactNode | undefined
};

export const Layout:React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="David Portilla" />
        <meta name="description" content={ `Information about pokemon ${ title }` }/>
        <meta name="keywords" content={ `${ title } pokemon, pokedex` } />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
