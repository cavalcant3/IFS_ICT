import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'
import App from './App';
//<App />
import Header from './Components/Header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //Aqui listamos os componentes para renderizar na tela
  <React.StrictMode>
    <Header />
    
   
  </React.StrictMode>
);



