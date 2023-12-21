import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNav = (props) => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="md">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white">
            {props.storeName}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Broswe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default MyNav;
