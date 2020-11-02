import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './componems/auth/Login'
import NuevaCuenta from './componems/auth/NuevaCuenta'
import Proyectos from './componems/proyectos/Proyectos'

import ProyectoState from './context/proyectos/proyectoState'
import TareaState from './context/tareas/tareaState'


function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Proyectos} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Login} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
