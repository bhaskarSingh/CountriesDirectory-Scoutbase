import React from "react";
import bars from "../assets/bars.svg";
import styled from "styled-components";
const LoaderContainer = styled.div`
  display: flex;
  height: calc(100vh - 3.5rem);
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
  return (
    <LoaderContainer>
      <img width="70px" src={bars} alt="loading" />
    </LoaderContainer>
  );
};

export default Loader;
