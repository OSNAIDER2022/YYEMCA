import { Container, Col, Row, NavDropdown, Navbar, Nav, Badge } from 'react-bootstrap';
import '../css/Menu.css';

function Menu() {
    return(
        
        <Navbar expand="lg">
        <Container className='menu'>
          <Navbar.Brand href="#home">
            <h1>
                <Badge bg='secondary'>
                    YYME
                </Badge>
                
            </h1> 
            eslogan a colocar para la empresa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Quienes somos</Nav.Link>
              {/* MENU DESPLEGABLE
              <NavDropdown title="menu desplegable" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    example 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    example 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    example 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
               <Nav.Link href="#home">Nuestros servicios</Nav.Link>
               <Nav.Link href="#home">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        )
}

export default Menu;
