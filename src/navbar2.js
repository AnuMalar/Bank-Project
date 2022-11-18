import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="light" expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="navbar-brand"
                activeClassName="navbar-brand--active"
                href="#/Home"
                title=" Home Page"
              >
                {" "}
                Home{" "}
              </Nav.Link>
              
              
               <Nav.Link
                className="navbar-brand"
                title="Deposit in your Account"
                href="#/Deposit/"
              >
                Deposit{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Withdraw from your Account"
                href="#/Withdraw/"
              >
                WithDraw{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Track your Transactions"
                href="#/AllData/"
              >
                All Data
              </Nav.Link> 
              <Nav.Link
                className="navbar-brand"
                title=""
                href="#/logout/"
              >
                LogOut
              </Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
 }