import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const ServiceWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #eee;
`;

const WorkshopsService = ({ service: { image, title, body, pricing } }) => (
  <ServiceWrapper>
    <img src={`/uploads/${image}`} alt={title} />
    <h3>{title}</h3>
    <div>{body}</div>
  </ServiceWrapper>
);

const WorkshopsServices = ({ services }) => {
  return (
    <Wrapper>
      {services.map((service, key) => (
        <WorkshopsService key={key} service={service} />
      ))}
    </Wrapper>
  );
};

export default WorkshopsServices;
