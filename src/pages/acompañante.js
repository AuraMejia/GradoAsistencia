import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Acompañante from "../components/acompañante/acompañante";
import Footer from "../components/footer/footer";



function Index() {
  return (
    <div>
     <Header />
     <Nav />
     <Acompañante/>
     <Footer />

     </div>
  );
}

export default Index;

