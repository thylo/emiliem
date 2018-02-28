import React from "react";
import { withRouteData, Link } from "react-static";
import ReactMarkdown from "react-markdown";
import Prices from "../components/prices";
//
const Massage = ({ data: { title, services, pricing }, content }) => (
  <section>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
    <Prices prices={pricing} />
  </section>
);

export default withRouteData(Massage);
