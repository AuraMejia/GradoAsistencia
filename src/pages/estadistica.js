import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Cajaestadistica from "../components/cajaestadistica/cajaestadistica";
import Footer from "../components/footer/footer";



function Estadistica() {
  return (
    <div>
     <Header />
     <Nav />
     <Cajaestadistica />
     <Footer />

     </div>
  );
}

export default Estadistica;
