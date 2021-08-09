
import Index from "./pages/index";
import Inicio from "./pages/inicio";
import Estadistica from "./pages/estadistica";
import AcompananteUser from "./pages/acompañante"
import AdministrativoUser from "./pages/administrativo";
import InvitadoUser from "./pages/invitado";
import Genero from "./pages/genero";
import Cajapie from "./pages/pie";
import Final from "./pages/final";
import React from "react";
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import GlobalStyle from './GlobalStyles.js'


function App() {
  return (

         <div className="App">
    <Router>
    <GlobalStyle/> 
         <Switch>
           <Route exact path="/" render={() => (<Redirect to="/home"/>)}>
          </Route>

           <Route path="/home">
            <Index/>
          </Route>


          <Route path="/inicio">
            <Inicio/>
          </Route>
 
    
     
          <Route path="/estadistica">
            <Estadistica/>
          </Route>


          <Route path="/Cajapie">
            <Cajapie/>
          </Route>

           <Route path="/genero">
            <Genero/>
          </Route>

          <Route path="/Acompañante">
            <AcompananteUser/>
          </Route>

          <Route path="/Administrativo">
            <AdministrativoUser/>
          </Route>

          <Route path="/Invitado">
            <InvitadoUser/>
          </Route>

          <Route path="/Cajafinal">
            <Final/>
          </Route>

     </Switch>

          </Router>

          
    </div>

  );
}
export default App