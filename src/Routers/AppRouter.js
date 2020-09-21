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
import Question from "../Pages/Question";
import Galapagos from '../Pages/Provinces/Galapagos';
import ElOro from '../Pages/Provinces/El-Oro';
import Esmeraldas from '../Pages/Provinces/Esmeraldas';
import Guayas from '../Pages/Provinces/Guayas';
import Manabi from '../Pages/Provinces/Manabi';
import SantaElena from '../Pages/Provinces/Santa-Elena';
import LosRios from '../Pages/Provinces/Rios';
import SantoDomingo from '../Pages/Provinces/Santo-Domingo';
import MoronaSantiago from '../Pages/Provinces/Morona-Santiago';
import Napo from '../Pages/Provinces/Napo';
import Orellana from '../Pages/Provinces/Orellana';
import Pastaza from '../Pages/Provinces/Pastaza';
import Sucumbios from '../Pages/Provinces/Sucum';
import Zamora from '../Pages/Provinces/Zamora';
import Azuay from '../Pages/Provinces/Azuay';
import Bolivar from '../Pages/Provinces/Bolivar';
import Carchi from '../Pages/Provinces/Carchi';
import Cañar from '../Pages/Provinces/Cañar';
import Chimborazo from '../Pages/Provinces/Chimborazo';
import Cotopaxi from '../Pages/Provinces/Cotopaxi';
import Imbabura from '../Pages/Provinces/Imbabura';
import Loja from '../Pages/Provinces/Loja';
import Pichincha from '../Pages/Provinces/Pichincha';
import Tungurahua from '../Pages/Provinces/Tungurahua';


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
            <Route exact path={Routes.QUESTION + '/:region'}>
                <Question/>
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
            <Route exact path={Routes.GALAPAGOS}>
                <Galapagos/>
            </Route>
            <Route exact path={Routes.ORO}>
                <ElOro/>
            </Route>
            <Route exact path={Routes.ESMERALDAS}>
                <Esmeraldas/>
            </Route>
            <Route exact path={Routes.GUAYAS}>
                <Guayas/>
            </Route>
            <Route exact path={Routes.RIOS}>
                <LosRios/>
            </Route>
            <Route exact path={Routes.MANABI}>
                <Manabi/>
            </Route>
            <Route exact path={Routes.SANTA}>
                <SantaElena/>
            </Route>
            <Route exact path={Routes.TSACHILAS}>
                <SantoDomingo/>
            </Route>
            <Route exact path={Routes.MORONA}>
                <MoronaSantiago/>
            </Route>
            <Route exact path={Routes.NAPO}>
                <Napo/>
            </Route>
            <Route exact path={Routes.ORELLANA}>
                <Orellana/>
            </Route>
            <Route exact path={Routes.PASTAZA}>
                <Pastaza/>
            </Route>
            <Route exact path={Routes.SUCUMBIOS}>
                <Sucumbios/>
            </Route>
            <Route exact path={Routes.ZAMORA}>
                <Zamora/>
            </Route>
            <Route exact path={Routes.AZUAY}>
                <Azuay/>
            </Route>
            <Route exact path={Routes.BOLIVAR}>
                <Bolivar/>
            </Route>
            <Route exact path={Routes.CARCHI}>
                <Carchi/>
            </Route>
            <Route exact path={Routes.CAÑAR}>
                <Cañar/>
            </Route>
            <Route exact path={Routes.CHIMBORAZO}>
                <Chimborazo/>
            </Route>
            <Route exact path={Routes.COTOPAXI}>
                <Cotopaxi/>
            </Route>
            <Route exact path={Routes.IMBABURA}>
                <Imbabura/>
            </Route>
            <Route exact path={Routes.LOJA}>
                <Loja/>
            </Route>
            <Route exact path={Routes.PICHINCHA}>
                <Pichincha/>
            </Route>
            <Route exact path={Routes.TUNGURAHUA}>
                <Tungurahua/>
            </Route>
            <Route component={NotFound}/>
        </Switch>
    );
}

export default AppRoter;