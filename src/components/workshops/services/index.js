import React from "react";
import styled from "styled-components";
import MediaQuery from "../../../MediaQuery";

const Wrapper = styled.div``;

const ServiceWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  max-width: 1024px;

  ${MediaQuery.tablet`flex-direction:row; margin:1rem auto;display: flex; text-align: left;`};
`;

ServiceWrapper.Image = styled.img`
  ${MediaQuery.tablet`margin-right:1rem`};
`;

ServiceWrapper.Content = styled.div`
  flex: 1;
  ${MediaQuery.tablet`margin-right:1rem`};
`;

const WorkshopsService = ({ service: { image, title, body } }) => (
  <ServiceWrapper>
    {image && (
      <ServiceWrapper.Image
        src={`/images/250x250-${image.replace("/uploads/", "")}`}
        alt={title}
      />
    )}
    <ServiceWrapper.Content>
      <h3>{title}</h3>
      <div>{body}</div>
    </ServiceWrapper.Content>
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
