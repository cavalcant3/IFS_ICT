//import './Header.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import logo from './imagens/teste2.png'
import LogoHuawei from './imagens/huaweiLogoSolo.png'
import LogoIfs from './imagens/ifsLogoSolo.png'
import './Header.css'
function Header() {
  let navigate = useNavigate();
  return (
    <Navbar  className='testando3' fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='ContainerNavbar'>

        <NavbarBrand href="/">
          <img className='LogoNavbar'
            alt="logo"
            src={LogoIfs}
          />
           <img className='LogoNavbar'
            alt="LogoHuawei"
            src={LogoHuawei}
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
            <NavDropdown style={{ }} title="Cursos" id="collasible-nav-dropdown" >
              <NavDropdown.Item
                onClick={() => {
                  navigate("/cursos");
                }}>Inteligência artificial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="mailto:email@gmail.com" style={{ color: '#ffff' }}>Contato</Nav.Link>
            <Nav.Link href="#deets" class="btn btn-success" style={{ color: '#ffff' }}>
              <Button variant="success" style={{backgroundColor:'#269238', marginTop:'-6px'}}>Inscreva-se</Button>{' '}

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;