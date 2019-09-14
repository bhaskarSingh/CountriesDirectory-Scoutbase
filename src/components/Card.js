import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = ({ name, continent, languages }) => {
  return (
    <CardContainer>
      <Title>{name || ""}</Title>
      <div>
        <SubHeader>Languages</SubHeader>
        {languages &&
          languages.map(lang => {
            return (
              <Content>
                {lang.name}, <Small>Native:</Small> {lang.native}
              </Content>
            );
          })}
      </div>
      <div>
        <SubHeader>Continent</SubHeader>
        <Content>{continent && continent.name}</Content>
      </div>
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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  continent: PropTypes.object.isRequired
};

export default Card;
