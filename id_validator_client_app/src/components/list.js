import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const List = () => {
  return (
    <Container className="border border-primary p-5">
      <Row>
        <Col>
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
  );
};
export default List;
