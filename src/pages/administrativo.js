import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Admin from "../components/forms/Admin/Admin";
import Footer from "../components/footer/footer";



function AdministrativoUser() {
  return (
    <div>
     <Header />
     <Nav />
     <Admin/>
     <Footer />

     </div>
  );
}

export default AdministrativoUser;

