import Head from 'next/head'
import styled from 'styled-components';
import { HamburgerMenu } from '../src/components/Hamburger';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EEEEEE;
`;

export default function() {
  return (
    <Container>
      <Head>
        <title>Third Gen Partners - Buying</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>
      <HamburgerMenu />
      <Info>
        <Logo src="/tpg.svg" />
        <Headline>
          Buying businesses with $1M-2M owner earnings.
        </Headline>
      </Info>
    </Container>
  )
}

const Logo = styled.img`
  width: 70%;
  margin-bottom: 10px;

  @media(min-width: 768px) {
    margin-left: auto;
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

  @media(min-width: 768px) {
    margin-top: 0;
  }
`

const Headline = styled.div`
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  color: #030F4F;
  margin-left: auto;
  text-align: center;
`;
