import React from "react";
import styled from "styled-components";
import { Link } from "react-static";
import Prices from "../../prices";

const Wrapper = styled.div`
  display: flex;
`;

const ServiceWrapper = styled.div`
  padding: 1rem;
  &:first-child {
    padding-left: 0;
  }
`;

const EntrepriseService = ({
  service: { image, title, description, pricing }
}) => (
  <ServiceWrapper>
    <img src={`/uploads/${image}`} alt={title} />
    <h3>{title}</h3>
    <div>{description}</div>
    <Prices prices={pricing} />
  </ServiceWrapper>
);

const EntrepriseServices = ({ services }) => {
  return (
    <Wrapper>
      {services.map((service, key) => (
        <EntrepriseService key={key} service={service} />
      ))}
    </Wrapper>
  );
};

export default EntrepriseServices;
