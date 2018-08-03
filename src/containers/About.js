import React from "react";
import { withRouteData } from "react-static";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {
  DiamondImage,
  PageHeader,
  PageIntro,
  PageTitle
} from "../components/page";
import { beige, brown } from "../Colors";
import Social from "../components/Social";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  position: relative;
  max-width: 960px;
  margin: 0 auto 10rem auto;
  background: ${brown};
  z-index: 1;
  &:before {
    position: absolute;
    content: "";
    background: ${beige};
    top: 0;
    height: 100%;
    left: 0;
    width: 100%;
    transform: rotateZ(-10deg);
  }
`;

const Contact = styled.div`
  z-index: 2;
  margin: 1rem;
  color: #222;
  padding: 1rem;
  text-align: center;
  h2,
  h3,
  h4 {
    color: #111;
  }
`;

const About = ({ data: { title, contact, image }, content }) => (
  <section>
    <PageHeader content={content} title={title} />
    <Wrapper>
      <DiamondImage image={image} size={"550x550"} />
      <Contact>
        <ReactMarkdown source={contact} />
        <Social />
      </Contact>
    </Wrapper>
  </section>
);

export default withRouteData(About);
