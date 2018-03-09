import React from "react";
import { withRouteData } from "react-static";
import Services from "../components/home/services";

import styled from "styled-components";
import Footer from "../components/footer";
import { Header } from "../components/page";
//
const Wrapper = styled.section``;

const ServicesWrapper = styled.div`
  overflow: hidden;
`;

const Home = ({ data: { title, services }, content }) => (
  <Wrapper>
    <Header content={content} title={title} />
    <ServicesWrapper>
      <Services services={services} />
      <Footer />
    </ServicesWrapper>
  </Wrapper>
);

export default withRouteData(Home);
