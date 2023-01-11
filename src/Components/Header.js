//import './Header.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import logo from './imagens/teste2.png'
import './Header.css'
function Header() {
  let navigate = useNavigate();
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ paddingLeft: '50px', paddingRight: '50px' }}>

        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: '50px',

            }}
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='navbarrr' >
            <Nav.Link onClick={() => {
              navigate("/");
            }} style={{ color: '#ffff' }}>Inicio</Nav.Link>
            <NavDropdown style={{ color: '#ffff' }} title="Cursos" id="collasible-nav-dropdown" >
              <NavDropdown.Item
                onClick={() => {
                  navigate("/cursos");
                }}>Inteligência artificial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="mailto:email@gmail.com" style={{ color: '#ffff' }}>Contato</Nav.Link>
            <Nav.Link href="#deets" class="btn btn-success" style={{ color: '#ffff' }}>
              <Button variant="success">Inscreva-se</Button>{' '}

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;