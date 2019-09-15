import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
const Card = ({ name, continent, languages, code }) => {
  return (
    <CardContainer>
      <Title>{name || ""}</Title>
      <div>
        <SubHeader>Languages</SubHeader>
        {languages &&
          languages.map((lang, index) => {
            return (
              <Content key={index}>
                {lang.name}, <Small>Native:</Small> {lang.native}
              </Content>
            );
          })}
      </div>
      <div style={{ flexGrow: 1 }}>
        <SubHeader>Continent</SubHeader>
        <Content>{continent && continent.name}</Content>
      </div>
      <Button onClick={() => navigate(`/countries/${code}`)} type="button">
        Explore
      </Button>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 1rem;
  display: flex;
  width: 300px;
  background: #fff;
  max-width: 100%;
  flex-direction: column;
  justify-self: center;
`;

const Title = styled.div`
  font-weight: 600;
`;

const SubHeader = styled.div`
  font-size: 0.675rem;
  color: #444;
  padding-top: 5px;
`;

const Content = styled.div`
  font-size: 0.895rem;
`;

const Small = styled.span`
  font-size: 0.675rem;
  color: #333;
`;

const Button = styled.button`
  margin-top: 13px;
  border: 1px solid black;
  border-radius: 30px;
  align-self: flex-end;
  font-size: 0.765rem;
  background-color: #fff;
  cursor: pointer;
  :focus,
  :hover {
    background-color: #444;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    color: #fff;
  }
`;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  continent: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired
};

export default Card;
