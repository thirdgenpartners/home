import { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default function ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}