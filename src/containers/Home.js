import React from "react";
import { withRouteData } from "react-static";
import Services from "../components/home/services";

import styled from "styled-components";
import {PageHeader, PageWrapper} from "../components/page";
//

const ServicesWrapper = styled.div`
  overflow: hidden;
`;

const Home = ({ data: { title, services }, content }) => (
  <PageWrapper>
    <PageHeader content={content} title={title} />
    <ServicesWrapper>
      <Services services={services} />
    </ServicesWrapper>
  </PageWrapper>
);

export default withRouteData(Home);
