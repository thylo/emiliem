import React from "react";
import { withRouteData, Link } from "react-static";
import HomeServices from "../components/home/services";
import ReactMarkdown from "react-markdown";
//
const Home = ({ data: { title, services }, content }) => (
  <section>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
    <HomeServices services={services} />
  </section>
);

export default withRouteData(Home);
