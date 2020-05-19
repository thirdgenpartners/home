import { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400&display=swap');
    font-family: 'Hind Siliguri', sans-serif;
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