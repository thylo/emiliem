import React from "react";
import { withRouteData, Link } from "react-static";

import EntrepriseServices from "../components/entreprise/services";
import { PageHeader, PageWrapper } from "../components/page";
import ConsultingServices from "../components/consulting/services";
//
const Entreprise = ({ data: { title, services }, content }) => (
  <PageWrapper>
    <PageHeader content={content} title={title} />
    <ConsultingServices services={services} />
  </PageWrapper>
);

export default withRouteData(Entreprise);
