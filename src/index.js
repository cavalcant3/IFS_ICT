import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//<App />
import Header from './Components/Header';
import FirstSection from './Components/FirstSection';
import AboutTheProject from './Components/AboutTheProject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //Aqui listamos os componentes para renderizar na tela
  <React.StrictMode>
    <Header />
    <section>
    <FirstSection />
    </section>
   
     <AboutTheProject />
    
   
   
  </React.StrictMode>
);



