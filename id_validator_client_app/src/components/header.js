import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
const Header = ({ show, style, message, handleSubmit, setShow, setInput }) => {
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
