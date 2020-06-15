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
        <title>Third Gen Partners - Buying</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <HamburgerMenu />
      <Logo href="/" />
      <PageContainer>
        <PageHeader>What we look for</PageHeader>
        <Section>
          <SectionHeader>Owner earnings</SectionHeader>
          <SectionText>
            We buy businesses making $1-2M in owner earnings. We have no intention of selling the businesses we buy.
          </SectionText>
        </Section>
        <Section>
          <SectionHeader>Industries we like</SectionHeader>
          <SectionText spaceBelow>
            We like B2C and B2B2C businesses that build high quality products and never compromise the customer experience. 
          </SectionText>
          <ul>
            <ListItem>
              <SectionText spaceBelow>
                B2B manufacturers or suppliers for products like signage, furniture, flooring, and roofing tile.
              </SectionText>
            </ListItem>
            <ListItem>
              <SectionText spaceBelow>
                Home improvement and construction contract businesses, especially when they have relationships with developers. 
              </SectionText>
            </ListItem>
          </ul>
          <SectionText spaceBelow>
            We’re best suited to buy businesses that benefit from a full-featured online presence including tools like scheduling and payments.
          </SectionText>
        </Section>
        <Section>
          <SectionHeader>Have a business that we’re looking for?</SectionHeader>
          <SectionText spaceBelow>
            If you have a business that fits what we look for then we’d love to <Link href="contact">hear from you</Link>.
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

const ListItem = styled.li`
  color: #F6A000;
`;
