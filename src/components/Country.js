/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Header from "./Header";
import Layout from "./Layout";
import Loader from "./Loader";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Country = ({ id }) => {
  const query = gql`
    {
      country(code: "${id}") {
        name
        phone
        emoji
        currency
      }
    }
  `;

  const { data, loading, error } = useQuery(query);
  console.log("data", data);
  return (
    <Layout>
      <Header />
      {loading && <Loader />}
      <div>
        {data && (
          <CardContainer>
            <Title>
              <span>{data.country && data.country.emoji}</span>
              {data.country && data.country.name}
            </Title>
            <div style={{ paddingTop: 5 }}>
              PhoneCode: <Content>{data.country && data.country.phone}</Content>
            </div>
            <div>
              Currency:{" "}
              <Content>{data.country && data.country.currency}</Content>
            </div>
            <Button onClick={() => window.history.back()}>
              <IoIosArrowDropleftCircle size="80px" />
            </Button>
          </CardContainer>
        )}
      </div>
    </Layout>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 7.5rem);
  margin: 2rem;
  background: #fff;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const Content = styled.span`
  font-size: 0.775rem;
  color: #444;
`;

const Button = styled.button`
  margin-top: 50px;
  border: none;
  cursor: pointer;
  background-color: #fff;
`;

export default Country;
