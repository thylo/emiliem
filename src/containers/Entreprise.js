import React from "react";
import { withRouteData, Link } from "react-static";
import ReactMarkdown from "react-markdown";
import EntrepriseServices from "../components/entreprise/services";
//
const Entreprise = ({ data: { title, services }, content }) => (
  <section>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
    <EntrepriseServices services={services} />
  </section>
);

export default withRouteData(Entreprise);
