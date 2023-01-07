import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//<App />
import Header from './Components/Header';
import FirstSection from './Components/FirstSection';
import AboutTheProject from './Components/AboutTheProject';
import CardComponent from './Components/CardComponent'
import Coordination from './Components/Coordination'
import Footer from './Components/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //Aqui listamos os componentes para renderizar na tela
  <React.StrictMode>
    <section>
    <Header />
    </section>
    <section>
      <FirstSection />
    </section>
    <section>
    <AboutTheProject />
    </section>
    <section>
    <CardComponent />
    </section>
    <section>
    <Coordination />
    </section>
<section>
<Footer />
</section>





  </React.StrictMode>
);



