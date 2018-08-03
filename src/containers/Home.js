import React from "react";
import { withRouteData } from "react-static";
import Services from "../components/home/services";

import styled from "styled-components";
import { PageHeader, PageWrapper } from "../components/page";
import Carousel from "../components/home/carousel";
//

const ServicesWrapper = styled.div`
  overflow: hidden;
`;

const Home = ({ data: { title, services, carousel }, content }) => {
  console.log(carousel);
  return (
    <PageWrapper>
      <Carousel pictures={carousel} />
      <PageHeader content={content} title={title} />
      <ServicesWrapper>
        <Services services={services} />
      </ServicesWrapper>
    </PageWrapper>
  );
};

export default withRouteData(Home);
