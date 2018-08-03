import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link, withRouteData } from "react-static";
import { compose, withState } from "recompose";
import MediaQuery from "../../MediaQuery";

const MenuWrapper = styled.div`
  position: relative;
  max-width: 1024px;
  margin: auto;
  padding: 1rem;
  display: none;
  ${MediaQuery.tablet`display:block`};
`;

MenuWrapper.Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

MenuWrapper.Section = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

MenuWrapper.Item = styled(Link)`
  padding: 1rem;
  color: #222;
  text-align: center;
  flex: 1;
  .active {
    color: #00687a;
  }
`;
MenuWrapper.Logo = styled(Link)`
  display: block;
  text-align: center;
  svg {
    max-width: 100%;
    transform: translateX(-1.15rem);
  }
`;

/*<MenuWrapper.Logo to={"/"}>
        <Logo width={250} height={250} />
      </MenuWrapper.Logo>*/

const Menu = ({ pages, open, setOpen }) => {
  return (
    <MenuWrapper>
      <MenuWrapper.Items>
        <MenuWrapper.Logo to={"/"}>
          <Logo style={{ width: "10rem", height: "10rem" }} />
        </MenuWrapper.Logo>
        <MenuWrapper.Section>
          <MenuWrapper.Item to={"/soins"}>Soins esthétiques</MenuWrapper.Item>
          <MenuWrapper.Item to={"/maquillage"}>Maquillage</MenuWrapper.Item>
          <MenuWrapper.Item to={"/consulting"}>
            Conseil en image
          </MenuWrapper.Item>
          <MenuWrapper.Item to={"/massage"}>Massage</MenuWrapper.Item>
          <MenuWrapper.Item to={"/workshops"}>Ateliers</MenuWrapper.Item>
          <MenuWrapper.Item to={"/about"}>Contact</MenuWrapper.Item>
        </MenuWrapper.Section>
      </MenuWrapper.Items>
    </MenuWrapper>
  );
};

export default compose(withState("open", "setOpen", false), withRouteData)(
  Menu
);
