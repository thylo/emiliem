import React from "react";
import styled from "styled-components";
import { Link } from "react-static";

import { DuotoneImage } from "react-duotone";
import color from "color";
import {beige, darkGreen} from "../../../Colors";

const Wrapper = styled.div``;
const ServiceWrapper = styled.div`
  padding: 1rem;
`;

const TitleWrapper = styled.div`
  text-align: center;
  position: relative;
`;

const Title = styled.h3`
  position: absolute;
  text-transform: uppercase;
  left: 50%;
  top: 50%;
  background: #fefefe;
  padding: 0.5rem;
  a {
    //font-weight: 400;
    font-size: 2rem;
  }
`;

const Description = styled.div`
  padding: 0 1rem;
  text-align: center;
`;

const ImageWrapper = styled(DuotoneImage)`
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

const HomeService = ({ service }) => (
  <ServiceWrapper>
    <TitleWrapper>
      <ImageWrapper
        src={`/images/250x250-${service.image.substr(1)}`}
        alt=""
        primaryColor={beige}
        secondaryColor={darkGreen}
      />
      <Title>
        <Link to={service.link}>{service.title}</Link>
      </Title>
    </TitleWrapper>
    <Description>{service.description}</Description>
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
