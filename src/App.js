import React from "react";
import { Router } from "react-static";
import styled, { injectGlobal } from "styled-components";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";
import Menu from "./components/menu";
import Responsive from "./components/menu/Responsive";

injectGlobal`
  body {
    
  }
`;

const AppStyles = styled.section``;

const App = () => (
  <Router>
    <AppStyles>
      <Menu />
      <Responsive />
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
    <div data-netlify-identity-button>Login</div>
  </Router>
);

export default hot(module)(App);
