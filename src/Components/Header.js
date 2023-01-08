//import './Header.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './imagens/teste2.png'
//import './Header.css'
function Header() {
  return (
    //<Container class="navbar-fixed-top">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container style={{ paddingLeft: '50px', paddingRight: '50px' }}>

          <NavbarBrand href="/">
            <img
              alt="logo"
              src={logo}
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
            <Nav className='navbarrr' >
              <Nav.Link href="#Inicio" style={{ color: '#ffff' }}>Inicio</Nav.Link>
              <NavDropdown title="Cursos" style={{ color: '#ffff' }} id="collasible-nav-dropdown" >
                <NavDropdown.Item href="/#cursos">Inteligência artificial</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Contato" style={{ color: '#ffff' }}>Contato</Nav.Link>
              <Nav.Link href="#deets" class="btn btn-success" style={{ color: '#ffff' }}>
              <Button variant="success">Sala virtual</Button>{' '}
                
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>


        </Container>
      </Navbar>

   // </Container>


  );
}
export default Header;