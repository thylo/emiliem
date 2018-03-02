import React from "react";
import { withRouteData } from "react-static";
import Services from "../components/home/services";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
//
const Wrapper = styled.section`
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
`;

const Content = styled.h3`
  text-align: center;
  padding: 1rem;
  margin-bottom: 0;
`;

const HeaderWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const ServicesWrapper = styled.div`
  background-image: url("svg/bgtop.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: top;
  background-color: white;
`;

const Footer = styled.footer`
  text-align: center;
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
