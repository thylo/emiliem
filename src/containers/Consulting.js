import React from "react";
import { withRouteData, Link } from "react-static";
import ConsultingServices from "../components/consulting/services";
import {PageHeader, PageWrapper} from "../components/page";
//
const Consulting = ({ data: { title, services }, content }) => (
  <PageWrapper>
    <PageHeader content={content} title={title} />
    <ConsultingServices services={services} />
  </PageWrapper>
);

export default withRouteData(Consulting);
