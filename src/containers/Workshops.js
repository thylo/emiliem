import React from "react";
import { withRouteData, Link } from "react-static";
import WorkshopsServices from "../components/workshops/services";
import ReactMarkdown from "react-markdown";
import Prices from "../components/prices";
//
const Workshops = ({ data: { title, services, pricing }, content }) => (
  <section>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
    <WorkshopsServices services={services} />
    <Prices prices={pricing} />
  </section>
);

export default withRouteData(Workshops);
