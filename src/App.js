import React from "react";
import { Router, Link } from "react-static";
import styled, { injectGlobal } from "styled-components";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";
import Menu from "./components/menu";

injectGlobal`
  body {
    
  }
`;

const AppStyles = styled.section`
`;

const App = () => (
  <Router>
    <AppStyles>
      <Menu />
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
);

export default hot(module)(App);
