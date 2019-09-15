import React from "react";
import styled from "styled-components";
const Error = ({ children }) => {
  return <ErrorContainer>{children}</ErrorContainer>;
};

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6.5rem);
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem;
`;

export default Error;
