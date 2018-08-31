import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App'
import TaskPage from './js/TaskPage';
import Home from './js/Home';
import Login from './js/Login';
import ErrorPage from './js/ErrorPage';
import Perfil from './js/Perfil';
import Notes from './js/Notes';
const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/taskpage" component={TaskPage} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/perfil" component={Perfil} />
            {/* <Route exact path="/login" component= {Login} /> */}
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />


        </Switch>

    </App>;


export default AppRoutes;