import React, { useEffect, useState } from "react";
import Header from "../components/header";
import List from "../components/list";
import Container from "react-bootstrap/Container";

const Validator = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`/api/IdValidator/`)
      .then((result) => result.json())
      .then((list) => setList(list));
  }, []);

  return (
    <Container className="mt-5">
      <Header />
      <List list={list} />
    </Container>
  );
};

export default Validator;
