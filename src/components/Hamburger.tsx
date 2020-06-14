import styled from 'styled-components';
import { useState } from 'react';

export const HamburgerMenu = () => {
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <>
      <HamburgerContainer isOpen={hamOpen}>
        <NavItemList>
          <NavItem><a href="buying">What we look for</a></NavItem>
          <NavItem><a href="team">Who we are</a></NavItem>
          <NavItem><a href="refer">Refer a business</a></NavItem>
          <NavItem><a href="contact">Contact us</a></NavItem>
        </NavItemList>
      </HamburgerContainer>
      <HamburgerIcon isOpen={hamOpen} onClick={() => setHamOpen(!hamOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
    </>
  )
}

const HamburgerContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #EEEEEE;
  height: 100%;
  width: 100%;
  transition: transform .5s ease-in-out;
  transform: translateX(-100%);

  ${props => props.isOpen && `
    transform: translate(0);
  `}

  @media(min-width: 768px) {
    width: 400px;
    transform: translateX(-400px);

    ${props => props.isOpen && `
      transform: translate(0);
    `}
  }
`;

const NavItemList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 0;

  @media(min-width: 768px) {
    padding-top: 50px;
    padding-left: 40px;
    align-items: flex-start;
    justify-content: start;
    height: 100%;
  }
`;

const NavItem = styled.li`
  font-size: 36px;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  color: #030F4F;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    font-size: 24px;
  }

  a {
    color: #030F4F;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #F6A000;
    }
  }
`;

const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  width: 60px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 30px;
  transform: rotate(0deg) scale(.8);
  transition: .5s ease-in-out;
  cursor: pointer;

  ${props => props.isOpen && `
    left: 85%;
    transform: rotate(0deg) translateX(-100%) scale(.7);
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

  @media(min-width: 768px) {
    margin: 50px;

    ${props => props.isOpen && `
      left: 0;
      transform: rotate(0deg) translateX(270px) scale(.5) translateY(-60px);
    `}
  }
`;