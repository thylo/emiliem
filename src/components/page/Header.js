import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Title = styled.h2`
  text-align: center;
  padding: 4rem 1rem;
`;

const Content = styled.h3`
  text-align: center;
  padding: 0 1rem 4rem 1rem;
  max-width: 960px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div``;

export const Header = ({ title, content }) => (
  <HeaderWrapper>
    <Title>{title}</Title>
    <Content>
      <ReactMarkdown source={content} />
    </Content>
  </HeaderWrapper>
);
