import React from "react";
import { withRouteData, Link } from "react-static";
import WorkshopsServices from "../components/workshops/services";
import ReactMarkdown from "react-markdown";
import Prices from "../components/prices";
import { PageHeader, PageWrapper } from "../components/page";

import styled from "styled-components";
const PriceWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
`;
//
const Workshops = ({ data: { title, services, pricing }, content }) => (
  <PageWrapper>
    <PageHeader content={content} title={title} />
    <ReactMarkdown source={content} />
    <WorkshopsServices services={services} />
    <PriceWrapper>
        <h3>Prix</h3>
      <Prices prices={pricing} />
    </PriceWrapper>
  </PageWrapper>
);

export default withRouteData(Workshops);
