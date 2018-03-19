import React from "react";
import styled from "styled-components";

import { darkBeige } from "../../Colors";

const FooterWrapper = styled.footer`
  overflow: hidden;
  text-align: center;
  padding-top: 5rem;
  position: relative;
  &:before {
    position: absolute;
    z-index: 2;
    background-image: url("svg/diamond.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 0;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:after {
    z-index: 1;
    content: "";
    position: absolute;
    background-color: #d4c7b2;
    bottom: 0;
    top: 1rem;
    left: 0;
    right: 0;
  }
`;

const Background = styled.div`
  position: relative;
  z-index: 3;
`;
const Content = styled.div`
  overflow: hidden;
`;

const Footer = () => (
  <FooterWrapper>
    <Background>
      <h3>Je m'adapte à vos besoins</h3>
      <Content>
        <p>
          N’hésitez pas à me contacter pour toute question et construction de
          votre programme personnalisé.
        </p>
        <p><a href="mailto:info@emiliem.be">info@emiliem.be</a> • <a href="tel:0495650014">0495 65 00 14</a></p>
      </Content>
    </Background>
  </FooterWrapper>
);

export default Footer;
