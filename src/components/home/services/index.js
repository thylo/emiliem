import React from "react";
import styled from "styled-components";
import { Link } from "react-static";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ServiceWrapper = styled.div`
  padding: 1rem;
`;

const HomeService = ({ service }) => (
  <ServiceWrapper>
    <img src={`/images/250x250-${service.image.substr(1)}`} alt="" />
    <h3>
      <Link to={service.link}>{service.title}</Link>
    </h3>
    <div>{service.description}</div>
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
