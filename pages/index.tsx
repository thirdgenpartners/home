import Head from 'next/head'
import styled from 'styled-components';
import { HamburgerMenu } from '../src/components/Hamburger';

const Container = styled.div`
  background-image: url('background.png');
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default function() {
  return (
    <Container>
      <Head>
        <title>Third Gen Partners</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <HamburgerMenu />
      <Info>
        <Logo src="/tpg.svg" />
        <Headline>
          Buying businesses with $1M&nbsp;&mdash;&nbsp;2M&nbsp;owner&nbsp;earnings.
        </Headline>
      </Info>
    </Container>
  )
}

const Logo = styled.img`
  width: 350px;
  margin-bottom: 10px;
  transition: .5s ease-in-out;

  @supports (-webkit-backdrop-filter: blur(1px)) {
    padding-left: 25px;
  }

  @media(min-width: 768px) {
    width: 500px;

    @supports (-webkit-backdrop-filter: blur(1px)) {
      padding-left: 0;
    }
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;

  @media(min-width: 768px) {
    align-items: flex-start;
    padding-top: 38px;
    padding-left: 150px;
    margin-right: auto;
  }
`

const Headline = styled.div`
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  color: #030F4F;
  text-align: center;
`;
