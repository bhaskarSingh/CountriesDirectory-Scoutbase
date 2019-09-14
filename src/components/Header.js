import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  font-weight: 700;
  padding: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  color: #363434;
  height: 3.5rem;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return <HeaderContainer>Countries Directory</HeaderContainer>;
};

export default Header;
