import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './componems/auth/Login'
import NuevaCuenta from './componems/auth/NuevaCuenta'
import Proyectos from './componems/proyectos/Proyectos'

import ProyectoState from './context/proyectos/proyectoState'

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>

    </ProyectoState>
  );
}

export default App;
