import { Link } from "@reach/router";
import styled from "styled-components";

const CustomLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  background-color: #fff;
  color: #5e5b5b;
  font-weight: 600;
  border-radius: 40px;
  margin: 1rem;
  :hover,
  :focus {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #000;
  }
`;

export default CustomLink;
