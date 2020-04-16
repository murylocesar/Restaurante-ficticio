import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logan from './pages/logon';
import tipo_cad from './pages/tipo_cad';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component = { Logan }/>
                <Route path="/register" exact component = { Register }/>
                
                <Route path="/profile" exact  component = { Profile }/>
                <Route path="/incidente/new" exact component = { NewIncident }/>
                <Route path="/tipo" exact component = { tipo_cad }/>
            </Switch>
        </BrowserRouter>

    );
}