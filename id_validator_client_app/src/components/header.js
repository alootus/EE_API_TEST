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
  const [personalId, setPersonalId] = useState(null);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [sendId, setSendId] = useState();
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState("");

  useEffect(() => {
    fetch(`/api/IdValidator/${sendId}`)
      .then((result) => result.json())
      .then((personalId) => setPersonalId(personalId));
    if (personalId === true) {
      setMessage(`IK ${sendId} on valideeritud`);
      setStyle(`success`);
    }
    if (personalId === false) {
      setMessage(`IK ${sendId} ei valideeru `);
      setStyle(`danger`);
    }
  }, [sendId, personalId]);

  console.log(personalId);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.length === 11) {
      const toNumber = parseInt(input);
      if (Number.isInteger(toNumber)) {
        console.log(toNumber);
        setSendId(() => toNumber);
      }
      setMessage(`IK koosneb numbritest`);
      setStyle(`danger`);
    }

    if (input.length < 11) {
      setMessage(`IK pikkus on 11 numbrit`);
      setStyle(`danger`);
    }
    if (input.length > 11) {
      setMessage(`IK pikkus on 11 numbrit`);
      setStyle(`danger`);
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
          variant={style}
          onClose={() => setShow(false)}
          dismissible
        >
          <p className="pt-2">{message}</p>
        </Alert>

        <Form className="mt-3" onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Sisesta isikukood"
              name="id"
              onChange={(e) => {
                setInput(e.target.value);
                setShow(false);
              }}
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
