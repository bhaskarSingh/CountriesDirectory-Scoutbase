import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Header from "./Header";
import Layout from "./Layout";
import CardI from "./Card";
import Loader from "./Loader";
import Error from "./Error";
import styled from "styled-components";
const query = gql`
  {
    countries {
      code
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

  return (
    <Layout>
      <Header />
      <Container>
        {loading && <Loader />}
        {error && (
          <Error>Error Loading Countries data, please try again :(</Error>
        )}
        {data &&
          data.countries.map((country, index) => {
            return (
              <CardI
                key={index}
                name={country.name}
                languages={country.languages}
                continent={country.continent}
                code={country.code}
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
