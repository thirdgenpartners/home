import Head from 'next/head'
import styled from 'styled-components';
import { HamburgerMenu } from '../src/components/Hamburger';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #EEEEEE;
`;

export default function() {
  return (
    <Container>
      <Head>
        <title>Third Gen Partners - Team</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <HamburgerMenu />
      <Logo href="/" />
      <PageContainer>
        <PageHeader>Who we are</PageHeader>
        <Section>
          <SectionHeader>Valuing customer experience and design</SectionHeader>
          <SectionText>
          With 10 years experience building software and hardware for B2C and B2B2C use cases, we value customer experience and great design over everything.
          </SectionText>
        </Section>
        <Section>
          <SectionHeader>If you want to go far, go together</SectionHeader>
          <SectionText spaceBelow>
            If you want to go fast you could go alone, but if you want to go far you need to go together.
          </SectionText>
          <SectionText spaceBelow>
            We don’t believe in cutting costs through employee termination in order to make better short term numbers. 
          </SectionText>
          <SectionText spaceBelow>
            We know your employees are like family, and we’ll treat them the same way.
          </SectionText>
        </Section>
        <Section>
          <SectionHeader>Feel similarly?</SectionHeader>
          <SectionText spaceBelow>
            If you have similar values we’d love to <Link href="contact">get in touch</Link>.
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
    margin-left: 150px;
    background-image: url(tpg.svg);
    background-size: cover;
    width: 500px;
    height: 68px;
  }
`;

const PageContainer = styled.div`
  padding: 0 20px 0 20px;

  @media(min-width: 768px) {
    padding: 20px 150px 0 150px;
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

const Link = styled.a`
  color: #030F4F;
`;