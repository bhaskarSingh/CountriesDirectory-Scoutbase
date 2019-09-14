import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const HeaderContainer = styled(Link)`
  background-color: #fff;
  font-weight: 800;
  padding: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  color: #363434;
  height: 3.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Header = () => {
  return <HeaderContainer to="/">Countries Directory</HeaderContainer>;
};

export default Header;
