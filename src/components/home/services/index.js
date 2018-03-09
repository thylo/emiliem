import React from "react";
import styled from "styled-components";
import { Link } from "react-static";

import { DuotoneImage } from "react-duotone";
import MediaQuery from "../../../MediaQuery";
import { beige, darkGreen } from "../../../Colors";
import { DiamondImage } from "../../page";

const Wrapper = styled.div`
  max-width: 960px;
  margin: auto;
`;
const ServiceWrapper = styled.div`
  padding: 1rem;
  ${MediaQuery.tablet`display:flex;align-items:center; margin:0 6rem`};
`;

const TitleWrapper = styled.div`
  text-align: center;
  position: relative;
  ${MediaQuery.tablet`width:10rem`};
`;

const Title = styled.h3`
  position: absolute;
  text-transform: uppercase;
  background: rgba(254,254,254,.9);
  padding: 0.5rem;
  z-index: 1;
  a {
    //font-weight: 400;
    //font-size: 1rem;
  }
  top: 50%;
  left: 50%;
  ${MediaQuery.tablet`bottom:50%; right:50%; top:inherit; left: inherit`};
`;

const Description = styled.div`
  flex: 1;
  padding: 0 1rem;
  text-align: center ${MediaQuery.tablet`padding:0;text-align:left`};
`;

const HomeService = ({ service }) => (
  <ServiceWrapper>
    <TitleWrapper>
      <DiamondImage image={service.image} />
      <Title>
        <Link to={service.link}>{service.title}</Link>
      </Title>
    </TitleWrapper>
    <Description>
      <p>{service.description}</p>
      <Link to={service.link}>En savoir plus</Link>
    </Description>
  </ServiceWrapper>
);

const HomeServices = ({ services }) => {
  return (
    <Wrapper>
      {services.map(service => (
        <HomeService key={service.link} service={service} />
      ))}
    </Wrapper>
  );
};

export default HomeServices;
