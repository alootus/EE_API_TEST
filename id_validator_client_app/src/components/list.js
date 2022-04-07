import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const List = ({ list, i }) => {
  return (
    <Container className="border border-primary p-5">
      <Row>
        <Col>
          <ListGroup>
            {list.map((item, i) => {
              return (
                <ListGroup.Item
                  key={i}
                  className="bg-secondary text-white border border-white"
                >
                  <Row>
                    <Col className="text-center">{item}</Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default List;
