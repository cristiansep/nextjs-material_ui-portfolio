import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from '../themes';



export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>CristianSep</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="author" content="Cristian Sepúlveda"></meta>
        <meta name="description" content="Portafolio creado con material-ui"></meta>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <ThemeProvider theme={ lightTheme } >
        <CssBaseline />
        <Component {...pageProps} />
        </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};