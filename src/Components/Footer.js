//import './Header.css'


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
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container style={{ paddingLeft: '40%' }}>

          <div style={{display: 'flex', alignItems: 'center'}}>
          <NavbarBrand href="#home" className="justify-content-center">
            <div>
            <img
              alt="logo"
              src={logo}
              style={{
                height: 30,
                width: 200
              }}
            />
            </div>
            {/*teste */}
          </NavbarBrand>
          <Container>

        </Container>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">


            </Nav>
            
          </Navbar.Collapse>


        </Container>
      </Navbar>

   // </Container>


  );
}
export default Header;