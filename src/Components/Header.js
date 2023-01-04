//import './Header.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './imagens/teste2.png'
function Header(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavbarBrand href="#home">
      <img
        alt="logo"
        src= {logo}
        style={{
          height: 30,
          width: 200
        }}
      />
     {/*teste */}
    </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            
          </Nav>
          <Nav>
          <Nav.Link href="#Inicio">Inicio</Nav.Link>
          <NavDropdown title="Cursos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Inteligência artificial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contato">Contato</Nav.Link>
            <Nav.Link href="#deets">Sala virtual</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        //<><h1>OI MUNDO</h1><Button>Matheus</Button></>
    );
}
export default Header;