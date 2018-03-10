import React from "react";
import { withRouteData, Link } from "react-static";
import styled from "styled-components";
import Prices from "../components/prices";
import { PageHeader, PageWrapper } from "../components/page";
//
const PriceWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 1rem;
`;
const Massage = ({ data: { title, services, pricing }, content }) => (
  <PageWrapper>
    <PageHeader content={content} title={title} />
      <PriceWrapper>
          <Prices prices={pricing} flex/>
      </PriceWrapper>
  </PageWrapper>
);

export default withRouteData(Massage);
