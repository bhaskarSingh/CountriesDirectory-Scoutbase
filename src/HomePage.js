import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CustomLink from "./components/CustomLink";
import styled from "styled-components";
import { navigate } from "@reach/router";

function HomePage() {
  const [countryId, updateCountryId] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    navigate(`/country/${countryId}`);
  };

  return (
    <Layout>
      <Header />
      <MainContainer>
        <CustomLink to="countries">Explore Countries List</CustomLink>
        <Divider>OR</Divider>
        <Form onSubmit={onSubmit}>
          <Label id="countryId">
            Find Country By ID:
            <Input
              name="countryId"
              type="text"
              value={countryId}
              onChange={e => updateCountryId(e.target.value)}
              required
            />
          </Label>
          <Button type="submit">Search</Button>
        </Form>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3.5rem);
`;

const Form = styled.form`
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  background-color: #fff;
  border-radius: 80px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.2rem;
  color: #5e5b5b;
`;

const Input = styled.input`
  height: 1.8rem;
  border: 1px solid black;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
`;

const Button = styled.button`
  ox-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  padding: 0.7rem 1rem;
  border-radius: 30px;
  border: none;
  color: #fff;
  background-image: linear-gradient(to right, #ffd177, #ffaa00);
  font-weight: 800;
`;

const Divider = styled.strong`
  margin: 1rem;
  font-size: 2rem;
`;

export default HomePage;
