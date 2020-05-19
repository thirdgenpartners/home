import Head from 'next/head'
import styled from 'styled-components';

export default function() {
  return (
    <>
      <Head>
        <title>Third Gen Partners</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <Title>Third Gen Partners</Title>
        <Statement>Searching for a business making <CallOut>$1M</CallOut> in owner earnings</Statement>
        <Emails>
          <a href="mailto:buying@thirdgenpartners.com">buying@thirdgenpartners.com</a>
        </Emails>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #C41E3A;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 44px;
`;

const Statement = styled.h2`
  color: white;
`;

const CallOut = styled.span`
  color: black;
`;

const Emails = styled.h2`
  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: black;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;