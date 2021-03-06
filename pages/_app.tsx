import { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #EEEEEE
  }

  .lock-scroll {
    overflow: hidden;
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
