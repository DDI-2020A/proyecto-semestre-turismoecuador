import React, {useEffect, useState} from 'react';
import '../Styles/App.css';
import Footer from '../Components/Footer';
import Nav from "./Nav";
import {Layout, Menu, Breadcrumb} from 'antd';
import AppRouter from "../Routers/AppRouter";
import {Link, useHistory} from 'react-router-dom';
import FIREBASE from "../Firebase";
import Routes from "../Constants/routes";
import logo from '../Images/logo.svg';

const {Header, Content,} = Layout;

const App = () => {
    const [loged, setLoged] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    let [navLinks, setNavLinks] = useState([]);
    const history = useHistory();

    const navLinksInit = [
        {
            text: 'Inicio',
            path: Routes.HOME,
        },
        {
            text: 'Juega',
            path: Routes.GAME,
        },
        {
            text: 'Conoce',
            path: Routes.FORUM,
        },
        {
            text: 'Nosotros',
            path: Routes.ABOUT,
        },
    ]

    useEffect(() => {
        FIREBASE.auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                let displayName = user.displayName;
                let email = user.email;
                let emailVerified = user.emailVerified;
                let photoURL = user.photoURL;
                let isAnonymous = user.isAnonymous;
                let uid = user.uid;
                let providerData = user.providerData;
                // ...
                // console.log('uid', uid);
                setCurrentUser(uid);

                history.push(Routes.HOME);
                setLoged(true)
            } else {
                // User is signed out.
                console.log('user loggedOut');
                history.replace(Routes.LOGIN);
                setLoged(false)
            }
        });

        return () => {
            console.log('UNSUBSCRIBE');
        };
    });

    useEffect(() => {
        let navLinksUser = [];
        console.log('Logeado', loged);
        const getUser = async () => {
            FIREBASE.db.ref(`users/${currentUser}`).on('value', (snapshot) => {
                console.log('datos', snapshot.val().firstName);
                // console.log('currentUser:', currentUser);
                // console.log('dataUser', userData);

                loged === true
                    ? navLinksUser = [
                        ...navLinksInit,
                        {
                            text: snapshot.val().firstName,
                            path: Routes.HOME,
                            icon: ''
                        },
                        {
                            text: 'Salir',
                            path: Routes.HOME,
                            icon: 'ion-ios-home'
                        }
                    ]
                    : navLinksUser = [
                        ...navLinksInit,
                        {
                            text: 'Iniciar Sesión',
                            path: Routes.LOGIN,
                            icon: 'ion-ios-home'
                        },
                        {
                            text: 'Registrarse',
                            path: Routes.REGISTER,
                            icon: 'ion-ios-home'
                        }
                    ]
                setNavLinks(navLinksUser);
            });
        };
        getUser();

        return () => {
            FIREBASE.db.ref('users').off();
        };
    }, [loged]);

    return (

        <Layout className="layout">
            <Header>
                <Nav
                    navLinks={navLinks}
                    logo={logo}
                    hoverBackground="#96E2D9"
                    linkColor="#FDFFFC"
                />
            </Header>
            <Content>
                <AppRouter/>
            </Content>
            <Footer/>
        </Layout>
    );
}

export default App;
