import React from "react";
import {Route, Switch} from 'react-router-dom';
import Routes from "../Constants/routes";
import Home from "../Pages/Home";
import Game from "../Pages/Game";
import Forum from "../Pages/Forum";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import Map from "../Pages/Map";

const AppRoter = () => {
    return (
        <Switch>
            <Route exact path={Routes.HOME}>
                <Home/>
            </Route>
            <Route exact path={Routes.GAME}>
                <Game/>
            </Route>
            <Route exact path={Routes.MAP + '/:avatar'}>
                <Map/>
            </Route>
            <Route exact path={Routes.FORUM}>
                <Forum/>
            </Route>
            <Route exact path={Routes.ABOUT}>
                <About/>
            </Route>
            <Route exact path={Routes.LOGIN}>
                <Login/>
            </Route>
            <Route exact path={Routes.REGISTER}>
                <Register/>
            </Route>

            <Route component={NotFound}/>
        </Switch>
    );
}

export default AppRoter;