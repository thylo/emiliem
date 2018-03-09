import React from "react";
import { withRouteData, Link } from "react-static";
import ConsultingServices from "../components/consulting/services";
import { Header } from "../components/page";
//
const Home = ({ data: { title, services }, content }) => (
  <section>
    <Header content={content} title={title} />
    <ConsultingServices services={services} />
  </section>
);

export default withRouteData(Home);
