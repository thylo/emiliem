import React from "react";
import { withRouteData } from "react-static";
import ReactMarkdown from "react-markdown";
//
const About = ({ data: { title, contact, image }, content }) => (
  <section>
    <h1>{title}</h1>
    <img src={`/uploads/${image}`} alt={title} />
    <ReactMarkdown source={content} />
    <ReactMarkdown source={contact} />
  </section>
);

export default withRouteData(About);
