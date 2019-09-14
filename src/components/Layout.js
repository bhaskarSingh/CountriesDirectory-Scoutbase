import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: #f8f8f8;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};
export default Layout;
