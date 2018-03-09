import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { DuotoneImage } from "react-duotone";
import { beige, darkGreen } from "../../Colors";
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

const Image = styled(DuotoneImage)`
  margin: 0;
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

const ImageWrapper = styled.div`
  position: relative;
  &:before{
    width:175px;
    height:175px;
    background: #c88577;
    content:'';
    position: absolute;
    right:50%;
    top:50%;
    transform: translate(50%,-50%) rotateZ(20deg);
  }
`;

export const DiamondImage = ({ image }) => {
  if (!image) return <div />;
  return (
    <ImageWrapper>
      <Image
        src={`/images/250x250-${image.substr(1)}`}
        alt=""
        primaryColor={beige}
        secondaryColor={darkGreen}
      />
    </ImageWrapper>
  );
};
