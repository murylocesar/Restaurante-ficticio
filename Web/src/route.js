import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logan from './pages/logon';
import tipo_cad from './pages/tipo_cad';
import cad_restaurante from './pages/cad_restaurante';
import cad_cliente from './pages/cad_cliente';

import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component = { Logan }/>
                
                <Route path="/tipo" exact component = { tipo_cad }/>
                <Route path="/cliente" exact  component = { cad_cliente }/>
                <Route path="/restaurante" exact component = { cad_restaurante }/>
                
                <Route path="/incidente/new" exact component = { NewIncident }/>
            </Switch>
        </BrowserRouter>

    );
}