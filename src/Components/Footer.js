//import './Header.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from './imagens/teste2.png'
//import './Header.css'
function Header() {
  return (
    //<Container class="navbar-fixed-top">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ paddingLeft: '36%' }}>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavbarBrand href="#home" className="justify-content-center">
            <div>
              <img
                alt="logo"
                src={logo}
                style={{
                  height: '55px',
        
                }}
              />
            </div>
            <p style={{ color: '#ffff', fontSize: '10px', paddingLeft: '50px' }}>© 2023 Labic-IFS Copyright</p>
          </NavbarBrand>
          <Container>

          </Container>
        </div>


      </Container>
    </Navbar>
  );
}
export default Header;