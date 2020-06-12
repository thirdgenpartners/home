import Head from 'next/head'
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;

export default function() {
  return (
    <Container>
      <Head>
        <title>Third Gen Partners</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>
      <HamburgerNav />
      {/* <Logo src="/tpg.svg" /> */}
    </Container>
  )
}

const HamburgerNav = () => {
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <>
      <AllNavContainer isOpen={hamOpen}>
        <NavItemList>
          <NavItem>What we look for</NavItem>
          <NavItem>Who we are</NavItem>
          <NavItem>Refer a business</NavItem>
          <NavItem>Contact us</NavItem>
        </NavItemList>
      </AllNavContainer>
      <HamIcon isOpen={hamOpen} onClick={() => setHamOpen(!hamOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamIcon>
    </>
  )
}

const AllNavContainer = styled.div<{ isOpen: boolean }>`
  display: absolute;
  height: 100vh;
  width: 400px;
  transition: transform .5s ease-in-out;
  transform: translateX(-400px);

  ${props => props.isOpen && `
    transform: translate(0);
  `}
`;

const NavItemList = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li`
  font-size: 24px;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  color: #030F4F;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #F6A000;
  }
`;

const HamIcon = styled.div<{ isOpen: boolean }>`
  width: 60px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px;
  transform: rotate(0deg) scale(.8);
  transition: .5s ease-in-out;
  cursor: pointer;

  ${props => props.isOpen && `
    transform: rotate(0deg) translateX(270px) scale(.5) translateY(-60px);
  `}

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #030F4F;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .5s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      transform-origin: left center;

      ${props => props.isOpen && `
        transform: rotate(45deg);
        top: -3px;
        left: 8px;
      `}
    }

    &:nth-child(2) {
      top: 18px;
      transform-origin: left center;

      ${props => props.isOpen && `
        width: 0%;
        opacity: 0;
      `}
    }

    &:nth-child(3) {
      top: 36px;
      transform-origin: left center;

      ${props => props.isOpen && `
        transform: rotate(-45deg);
        top: 39px;
        left: 8px;
      `}
    }
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 500px;
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