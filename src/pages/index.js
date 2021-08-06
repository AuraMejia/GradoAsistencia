import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Cajaindex from "../components/cajaindex/cajaindex";
import Aforo from "../components/Aforo/Aforo";
import Footer from "../components/footer/footer";



function Index() {
  return (
    <div>
     <Header />
     <Nav />
     <Cajaindex />
     <Aforo />
     <Footer />

     </div>
  );
}

export default Index;

