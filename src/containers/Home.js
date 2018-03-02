import React from "react";
import { withRouteData } from "react-static";
import Services from "../components/home/services";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
//
const Wrapper = styled.section``;

const Title = styled.h2`
  text-align: center;
`;

const Content = styled.h3`
  text-align: center;
  padding: 1rem;
  margin-bottom: 0;
`;

const HeaderWrapper = styled.div``;

const ServicesWrapper = styled.div`
  overflow: hidden;
`;

const Footer = styled.footer`
  overflow: hidden;
  text-align: center;
  padding-top:5rem;
  background-image: url("svg/diamond.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: 0;
  background-color: #d4c7b2;
`;

const Home = ({ data: { title, services }, content }) => (
  <Wrapper>
    <HeaderWrapper>
      <Title>{title}</Title>
      <Content>
        <ReactMarkdown source={content} />
      </Content>
    </HeaderWrapper>
    <ServicesWrapper>
      <Services services={services} />

      <Footer>
        <h3>Je m'adapte a vos besoins</h3>
        <div>
          <p>
            N’hésitez pas à me contacter pour toute question et construction de
            votre programme personnalisé.
          </p>
          <p>info@emiliem.be • 0495 65 00 14 www.emiliem.be</p>
        </div>
      </Footer>
    </ServicesWrapper>
  </Wrapper>
);

export default withRouteData(Home);
