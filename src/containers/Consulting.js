import React from "react";
import { withRouteData, Link } from "react-static";
import ConsultingServices from "../components/consulting/services";
import ReactMarkdown from "react-markdown";
//
const Home = ({ data: { title, services }, content }) => (
  <section>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
    <ConsultingServices services={services} />
  </section>
);

export default withRouteData(Home);
