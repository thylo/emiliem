import React from "react";
import { withRouteData, Link } from "react-static";
import HomeServices from "../components/home/services";
//
const Home = ({ data: { services }, content }) => (
  <section>
    <HomeServices services={services} />
  </section>
);

export default withRouteData(Home);
