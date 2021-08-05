import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Administrativo from "../components/administracion/administrativo";
import Footer from "../components/footer/footer";



function Index() {
  return (
    <div>
     <Header />
     <Nav />
     <Administrativo />
     <Footer />

     </div>
  );
}

export default Index;

