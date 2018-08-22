import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App'
import TaskPage from './pages/task-page/TaskPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ErrorPage from './pages/error-page/ErrorPage';
const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/taskpage" component= {TaskPage}  />
            <Route exact path="/home" component= {Home} />
            <Route exact path="/login" component= {Login} />
            <Route exact path="/" component= {Login} />
            <Route component= {ErrorPage} />


        </Switch>
        
    </App>;


export default AppRoutes;