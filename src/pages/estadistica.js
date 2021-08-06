import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Count from '../components/Aforo/Aforo'
import Footer from "../components/footer/footer";



function Estadistica() {
  return (
    <div>
     <Header />
     <Nav />
     <Count/>
     <Footer />

     </div>
  );
}

export default Estadistica;
