import React from "react";
import { withRouteData, Link } from "react-static";
import { PageHeader, PageWrapper } from "../components/page";
import styled from "styled-components";
//

const ImageWrapper = styled.div`
  text-align: center;
`;
const Image = styled.img`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 1rem;
`;

const Maquillage = ({ data: { title, image }, content }) => (
  <PageWrapper>
    <PageHeader content={content} title={title} />
      <ImageWrapper>
    <Image src={`/images/650-${image.substr(1)}`} />
      </ImageWrapper>
  </PageWrapper>
);

export default withRouteData(Maquillage);
