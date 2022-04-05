import React from "react";
import Header from "../components/header";
import List from "../components/list";
import Container from "react-bootstrap/Container";

const Validator = () => {
  return (
    <Container className="mt-5">
      <Header />
      <List />
    </Container>
  );
};

export default Validator;
