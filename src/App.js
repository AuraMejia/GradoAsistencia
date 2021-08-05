
import Index from "./pages/index";
import Inicio from "./pages/inicio";
import Estadistica from "./pages/estadistica";
import AcompananteUser from "./pages/acompañante"
import AdministrativoUser from "./pages/administrativo";
import InvitadoUser from "./pages/invitado";
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
      </Switch>
      {/* {/*<Footer/> */}
     


          <Route path="/estadistica">
            <Estadistica/>
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

          </Router>

          
    </div>

  );
}
export default App