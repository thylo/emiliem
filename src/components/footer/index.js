import React from 'react';
import styled from "styled-components";

const FooterWrapper = styled.footer`
  overflow: hidden;
  text-align: center;
  padding-top: 5rem;
  background-image: url("svg/diamond.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: 0;
  background-color: #d4c7b2;
`;

const Footer = () => (
  <FooterWrapper>
    <h3>Je m'adapte a vos besoins</h3>
    <div>
      <p>
        N’hésitez pas à me contacter pour toute question et construction de
        votre programme personnalisé.
      </p>
      <p>info@emiliem.be • 0495 65 00 14 www.emiliem.be</p>
    </div>
  </FooterWrapper>
);

export default Footer;