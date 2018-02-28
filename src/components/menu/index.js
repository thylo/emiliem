import React from "react";
import styled from "styled-components";
import Logo from "./logo.svg";
import Link from "gatsby-link";

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

MenuWrapper.Item = styled(Link)`
  padding: 1rem;
  color: #00687a;
`;
MenuWrapper.Logo = styled(Link)`
  padding: 1rem;
`;

const Menu = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <MenuWrapper>
      <MenuWrapper.Logo to={"/"}>
        <Logo width={250} height={250} />
      </MenuWrapper.Logo>
      {edges.map(({ node: { id, frontmatter: { menu, template } } }) => (
        <MenuWrapper.Item key={id} to={`/${template}`}>
          {menu}
        </MenuWrapper.Item>
      ))}
    </MenuWrapper>
  );
};

export const query = graphql`
  fragment MenuFragment on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          template
          menu
          title
          subtitle
          intro
          modules {
            description
            title
          }
          steps {
            description
            prices {
              duration
              label
              price
            }
            title
          }
          prices {
            duration
            label
            price
          }
        }
      }
    }
  }
`;

export default Menu;
