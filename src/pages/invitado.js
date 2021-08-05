import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Invitado from "../components/forms/Invitado/Invitado";
import Footer from "../components/footer/footer";



function InvitadoUser () {
  return (
    <div>
     <Header />
     <Nav />
     <Invitado />
     <Footer />

     </div>
  );
}

export default InvitadoUser ;

