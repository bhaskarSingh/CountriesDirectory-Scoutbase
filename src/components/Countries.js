import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Header from "./Header";
import Layout from "./Layout";
import CardI from "./Card";
import Loader from "./Loader";
import styled from "styled-components";
const query = gql`
  {
    countries {
      name
      languages {
        code
        name
        native
      }
      continent {
        code
        name
      }
    }
  }
`;

const Countries = () => {
  const { loading, data, error } = useQuery(query);
  console.log("loading", loading);
  console.log("data", data);
  console.log("error", error);
  return (
    <Layout>
      <Header />
      <Container>
        {loading && <Loader />}
        {data &&
          data.countries.map((country, index) => {
            return (
              <CardI
                key={index}
                name={country.name}
                languages={country.languages}
                continent={country.continent}
              />
            );
          })}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export default Countries;
