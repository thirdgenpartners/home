import Head from 'next/head'
import styled from 'styled-components';
import { HamburgerMenu } from '../src/components/Hamburger';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #EEEEEE;
  min-height: 100vh;
`;

export default function() {
  return (
    <Container>
      <Head>
        <title>Third Gen Partners - Team</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>
      <HamburgerMenu />
      <Logo />
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
            We also believe that if you want to go fast you could go alone, but if you want to go far you need to go together.
          </SectionText>
          <SectionText spaceBelow>
            With this as a guiding principle, we don’t believe in cutting costs through employee termination in order to make better short term numbers. We know your employees are like family, and we’ll treat them the same way.
          </SectionText>
          <SectionText spaceBelow>
            We like home improvement and construction contract businesses, especially when they have relationships with developers. 
          </SectionText>
          <SectionText spaceBelow>
            Occasionally we like niche software businesses because of our background in software engineering. More often, however, we like non-technical businesses that might benefit from a faster website, improved SEO, and online lead conversion.
          </SectionText>
        </Section>
        <Section>
          <SectionHeader>Feel the same way?</SectionHeader>
          <SectionText spaceBelow>
            If you have similar values we’d love to get in touch.
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