import styled from "styled-components";
import { Component } from "react";
import { Facebook, Instagram, Mail, Phone } from "react-feather";
import React from "react";

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    margin: 0 0.5rem 1rem 0.5rem;
    //border: 1px solid #00687a;
    //border-radius: 2rem;
    //background: rgba(255, 255, 255, 1);
  }
  span {
    margin-left: 0.5rem;
    display: inline-block;
  }
`;

class Social extends Component {
  render() {
    return (
      <SocialLinks>
        <a href="mailto:info@emiliem.be">
          <Mail />
          <span>info@emiliem.be</span>
        </a>
        <a href="tel:0495650014">
          <Phone />
          <span>0495 65 00 14</span>
        </a>
        <a href="https://www.facebook.com/EmilieM.conseil.image">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/emi_moreels/">
          <Instagram />
        </a>
      </SocialLinks>
    );
  }
}

export default Social;