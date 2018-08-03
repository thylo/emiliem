import React from "react";
import { withRouteData, Link } from "react-static";
import styled from "styled-components";
import Prices from "../components/prices";
import { PageHeader, PageWrapper } from "../components/page";
import ConsultingServices from "../components/consulting/services";
//
const PriceWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;
const Image = styled.img`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 1rem;
`;

const Massage = ({ data: { title, services, pricing, image }, content }) => (
  <PageWrapper>
    <PageHeader content={content} title={title} />
    <ImageWrapper>
      <Image src={`/images/650-${image.replace("/uploads/", "")}`} />
    </ImageWrapper>
    <ConsultingServices services={services} />
  </PageWrapper>
);

export default withRouteData(Massage);
