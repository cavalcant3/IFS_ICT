//import './Header.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from './imagens/teste2.png'
import labic from './imagens/labicFooter.jpg'
import huaweiLogoSolo from './imagens/huaweiLogoSolo.png'
import ifsLogoSolo from './imagens/ifsLogoSolo.png'
import dinoveFooter from './imagens/dinoveFooter.png'
import './Footer.css'
function Header() {
  return (
    <Navbar className='TestandoAqui' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='containerFooter'>
        <div>
            <img
              alt="logo"
              src={huaweiLogoSolo}
              style={{
                height: '55px',

              }}
            />
          </div>
          <div>
            <img
              alt="labic"
              src={ifsLogoSolo}
              style={{
                height: '80px',

              }}
            />
          </div>
          <div>
            <img
              alt="labic"
              src={labic}
              style={{
                height: '110px',

              }}
            />
          </div>
          <div>
            <img
              alt="dinoveLogo"
              src={dinoveFooter}
              style={{
                height: '80px',

              }}
            />
          </div>
      </Container>
    </Navbar>
  );
}
export default Header;