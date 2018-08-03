import React from "react";
import styled from "styled-components";
import { Link } from "react-static";
import Prices from "../../prices";
import { DiamondImage } from "../../page";
import MediaQuery from "../../../MediaQuery";

const Wrapper = styled.div``;

const ServiceWrapper = styled.div`
  padding: 1rem;
  margin: auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${MediaQuery.tablet`flex-direction:row`};
`;

const Title = styled.h3`
  text-align: center;
  ${MediaQuery.tablet`text-align:left`};
`;

const Content = styled.div`
  text-align: center;
  flex: 1;
  ${MediaQuery.tablet`text-align:left`};
`;

const ImageWrapper = styled.div`
  ${MediaQuery.tablet`width:10rem; margin-right:2rem; `};
`;

const ConsultingService = ({ service: { image, title, body, pricing } }) => (
  <ServiceWrapper>
    {image && (
      <ImageWrapper>
        <DiamondImage size="250x250" image={image} />
      </ImageWrapper>
    )}
    <Content>
      <Title>{title}</Title>
      <div>{body}</div>
      <Prices prices={pricing} />
    </Content>
  </ServiceWrapper>
);

const ConsultingServices = ({ services }) => {
  return (
    <Wrapper>
      {services.map((service, key) => (
        <ConsultingService key={key} service={service} />
      ))}
    </Wrapper>
  );
};

export default ConsultingServices;
