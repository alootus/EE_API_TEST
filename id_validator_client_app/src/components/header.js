import React, { useContext, useEffect, useState, useRef } from "react";
//import DataContext from "../context/data/dataContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
const Header = () => {
  //const dataContext = useContext(DataContext);
  // const { validId, getId } = dataContext;
  //const { id, setId } = useState();
  const [personalId, setPersonalId] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState();
  const [sendId, setSendId] = useState();

  useEffect(() => {
    fetch(`/api/IdValidator/${sendId}`)
      .then((result) => result.json())
      .then((personalId) => setPersonalId(personalId));
  }, [sendId]);

  console.log(personalId);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.length < 11) {
      console.log("to short");
    }
    if (input.length > 11) {
      console.log("to short or too long");
    }
    if (input.length === 11) {
      const toNumber = Number(input);
      if (Number.isInteger(toNumber) === true) {
        setSendId(() => toNumber);
      }
    }
  };

  return (
    <Navbar className="border border-primary" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <h1>Eesti Isikukoodi valideerija</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Alert
          className="mt-3"
          show={show}
          variant={personalId === true ? "success" : "danger"}
          onClose={() => setShow(false)}
          dismissible
        >
          <p className="pt-2">
            {personalId === true
              ? `Sinu sisestatud IK ${input} on korrektne`
              : `Sinu sisestatud IK ${input} ei ole korrektne`}
          </p>
        </Alert>

        <Form className="mt-3" onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Sisesta isikukood"
              name="id"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="submit"
              variant="outline-primary"
              id="isValid"
              onClick={() => setShow(true)}
            >
              Valideeri
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
};
export default Header;
