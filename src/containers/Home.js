import React from "react";
import { withRouteData } from "react-static";
import HomeServices from "../components/home/services";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
//
const Wrapper = styled.section`
  padding: 1rem;
`;

const Home = ({ data: { title, services }, content }) => (
  <Wrapper>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
    <HomeServices services={services} />
  </Wrapper>
);

export default withRouteData(Home);
