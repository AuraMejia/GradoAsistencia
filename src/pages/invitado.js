import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Cajainicio from "../components/cajainicio/cajainicio";
import Footer from "../components/footer/footer";



function Inicio () {
  return (
    <div>
     <Header />
     <Nav />
     <Cajainicio />
     <Footer />

     </div>
  );
}

export default Inicio ;

