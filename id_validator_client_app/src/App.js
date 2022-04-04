import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("/api/IdValidator/37709296000")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  console.log(rowData);
  return (
    <div className="App">
      <Container className="mt-5">
        <Navbar className="border border-primary" bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <h1>Eesti Isikukoodi valideerija</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Form className="mt-3">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Sisesta isikukood"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-primary" id="isValid">
                  Valideeri
                </Button>
              </InputGroup>
            </Form>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col className="mt-5">
              <ListGroup>
                <ListGroup.Item className="bg-success text-white border border-white">
                  <Row>
                    <Col className="text-end">37712023455</Col>
                    <Col>Isikukood on valideeritud</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-success text-white border-white">
                  <Row>
                    <Col className="text-end">48110256019</Col>
                    <Col>Isikukood on valideeritud</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-danger text-white border-white">
                  <Row>
                    <Col className="text-end">9110256019</Col>
                    <Col>Soo tunnus puudub</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-success text-white border-white">
                  <Row>
                    <Col className="text-end">37712023455</Col>
                    <Col>Isikukood on valideeritud</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-success text-white border-white">
                  <Row>
                    <Col className="text-end">37712023455</Col>
                    <Col>Isikukood on valideeritud</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-danger text-white border-white">
                  <Row>
                    <Col className="text-end">9110406019</Col>
                    <Col>Sünni kuupäev ei vasta formaadile</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
