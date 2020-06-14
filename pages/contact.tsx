import Head from 'next/head'
import styled from 'styled-components';
import { HamburgerMenu } from '../src/components/Hamburger';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
  background-color: #EEEEEE;
`;

export default function() {
  return (
    <Container>
      <Head>
        <title>Third Gen Partners - Contact</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500:600&display=swap" rel="stylesheet" />
      </Head>
      <HamburgerMenu />
      <Logo href="/" />
      <PageContainer>
        <PageHeader>Contact us</PageHeader>
        <Section>
          <SectionHeader>Email us</SectionHeader>
          <SectionText>
            Reach out at buying@thirdgenpartners.com
          </SectionText>
        </Section>
      </PageContainer>
    </Container>
  )
}

const Logo = styled.a`
  margin: 12px auto 10px auto;
  background-image: url(tgpShort.svg);
  background-size: cover;
  width: 90px;
  height: 47px;

  @media(min-width: 768px) {
    margin-top: 38px;
    margin-left: 110px;
    background-image: url(tpg.svg);
    background-size: cover;
    width: 500px;
    height: 68px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  @media(min-width: 768px) {
    margin-top: 0;
  }
`;

const PageContainer = styled.div`
  padding: 0 20px 0 20px;

  @media(min-width: 768px) {
    padding: 20px 110px 0 110px;
  }
`;

const PageHeader = styled.div`
  font-size: 28px;
  font-family: 'Lato', sans-serif;
  color: #030F4F;
  padding-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Lato', sans-serif;
  color: #F6A000;
  margin-bottom: 3px;
`;

const SectionText = styled.div<{ spaceBelow?: boolean }>`
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  color: #030F4F;
  ${props => props.spaceBelow && `
    margin-bottom: 20px;
  `}
`;