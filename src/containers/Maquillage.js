import React from "react";
import { withRouteData, Link } from "react-static";
import ReactMarkdown from "react-markdown";
//
const Maquillage = ({ data: { title, image }, content }) => (
  <section>
    <h1>{title}</h1>
    <img src={`/uploads/${image}`} />
    <ReactMarkdown source={content} />
  </section>
);

export default withRouteData(Maquillage);
