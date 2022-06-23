import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";

type Props = {
    title?: string;
    children?: React.ReactNode | undefined
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout:React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="David Portilla" />
        <meta name="description" content={ `Information about pokemon ${ title }` }/>
        <meta name="keywords" content={ `${ title } pokemon, pokedex` } />

        <meta name="og:title" content={ `Information about pokemon ${ title }` }/>
        <meta name="og:description" content={ `Information about pokemon ${ title }` }/>
        <meta name="og:image" content={ `${ origin }/pikachuu.jpg` } />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
