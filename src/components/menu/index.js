import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import XIcon from "react-feather/dist/icons/x-circle";
import HorizontalIcon from "react-feather/dist/icons/menu";
import { Link, withRouteData } from "react-static";
import { compose, withState } from "recompose";

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

MenuWrapper.Items = styled.div`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

MenuWrapper.Item = styled(Link)`
  padding: 1rem;
  color: #00687a;
  text-align: center;
`;
MenuWrapper.Logo = styled(Link)`
  padding: 1rem;
  display: block;
  svg {
  max-width: 100%;
    transform: translateX(-1.15rem);
  }
`;

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
/*<MenuWrapper.Logo to={"/"}>
        <Logo width={250} height={250} />
      </MenuWrapper.Logo>*/

const Menu = ({ pages, open, setOpen }) => {
  return (
    <MenuWrapper>
      <MenuWrapper.Logo to={"/"}>
        <Logo style={{ width: "20rem" }} />
      </MenuWrapper.Logo>
      {!open && <MenuIcon onClick={() => setOpen(true)} />}
      {open && (
        <MenuWrapper.Items>
          <CloseIcon onClick={() => setOpen(false)} />
          {pages.map(
            ({ data: { title, slug, menu } }, key) =>
              slug !== "/" && (
                <MenuWrapper.Item key={key} to={slug}>
                  {menu ? menu : title}
                </MenuWrapper.Item>
              )
          )}
        </MenuWrapper.Items>
      )}
    </MenuWrapper>
  );
};

export default compose(withState("open", "setOpen", false), withRouteData)(
  Menu
);
