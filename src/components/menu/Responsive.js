import { Route } from "react-router";
import React from "react";
import HorizontalIcon from "react-feather/dist/icons/menu";
import XIcon from "react-feather/dist/icons/x-circle";
import styled from "styled-components";
import MediaQuery from "../../MediaQuery";
import { Link } from "react-static";
import Logo from "./Logo";

const CloseIcon = styled(XIcon)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
const MenuIcon = styled(HorizontalIcon)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

const ResponsiveWrapper = styled.nav`
  display: block;
  ${MediaQuery.tablet`display:none`};
`;

const Wrapper = styled.nav`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

const ResponsiveItem = styled(Link)`
  padding: 1rem;
  color: #00687a;
  text-align: center;
`;

const LogoWrapper = styled(Link)`
  display: block;
  text-align: center;
  svg{
    transform: translateX(-1rem);
  }
`;

const Responsive = () => (
  <Route
    path={"*/menu"}
    children={({ match, history }) => (
      <ResponsiveWrapper>
        <LogoWrapper to={"/"}>
          <Logo style={{ width: "15rem", height: "15rem" }} />
        </LogoWrapper>
        {!match && <MenuIcon onClick={() => history.push("/menu")} />}
        {match && (
          <Wrapper>
            <CloseIcon onClick={history.goBack} />
            <ResponsiveItem to={"/"}>Accueil</ResponsiveItem>
            <ResponsiveItem to={"/entreprise"}>En entreprise</ResponsiveItem>
            <ResponsiveItem to={"/consulting"}>Conseil en image</ResponsiveItem>
            <ResponsiveItem to={"/maquillage"}>Maquillage</ResponsiveItem>
            <ResponsiveItem to={"/massage"}>Contact</ResponsiveItem>
            <ResponsiveItem to={"/workshops"}>Ateliers</ResponsiveItem>
            <ResponsiveItem to={"/about"}>Contact</ResponsiveItem>
          </Wrapper>
        )}
      </ResponsiveWrapper>
    )}
  />
);

export default Responsive;
