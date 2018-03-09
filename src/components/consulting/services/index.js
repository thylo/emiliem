import React from "react";
import styled from "styled-components";
import { Link } from "react-static";
import Prices from "../../prices";
import { DiamondImage } from "../../page";

const Wrapper = styled.div``;

const ServiceWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #eee;
`;

const ConsultingService = ({ service: { image, title, body, pricing } }) => (
  <ServiceWrapper>
    <DiamondImage image={image} />
    <h3>{title}</h3>
    <div>{body}</div>
    <Prices prices={pricing} />
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
