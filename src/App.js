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
  background-image: url("svg/bgbottom.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: top;
  //background-color: #ddd2bd;
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
