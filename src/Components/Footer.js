//import './Header.css'


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import labic from './imagens/labicFooter.jpg'
import huaweiLogoSolo from './imagens/huaweiLogoSolo.png'
import ifsLogoSolo from './imagens/ifsLogoSolo.png'
import dinoveFooter from './imagens/dinoveFooter.png'
import logoSoftTex from './imagens/logoSoftTex.png'
import logoMCTI from './imagens/logoMCTI.png'
import './Footer.css'
function Header() {
  return (
    <Navbar className='TestandoAqui' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='containerFooter'>
        <div>
          <img
            alt="logo"
            src={huaweiLogoSolo}
            className='huaweiLogoSolo'
            
          />
        </div>
        <div>
          <img
            alt="ifsLogoSolo"
            src={ifsLogoSolo}
            className='ifsLogoSolo'

          />
        </div>
        <div>
          <img
            alt="labic"
            src={labic}
            className='labic'
          />
        </div>
        <div>
          <img
            alt="dinoveLogo"
            src={dinoveFooter}
            className='dinoveFooter'
          />
        </div>
        <div>
          <img
            alt="logoMCTI"
            src={logoMCTI}
            className='logoMCTI'
          />
        </div>
        <div>
          <img
            alt="logoSoftTex"
            src={logoSoftTex}
            className='logoSoftTex'
          />
        </div>
      </Container>
    </Navbar>
  );
}
export default Header;