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
    const [currentUser, setCurrentUser] = useState(null);
    const [userName, setUserName] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    let [dataSource, setDataSource] = useState([]);
    let [navLinks, setNavLinks] = useState([]);
    const history = useHistory();

    const navLinksInit = [
        {
            id: 'nav-home',
            text: 'Inicio',
            ico: 'fas fa-home',
            path: Routes.HOME
        },
        {
            id: 'nav-game',
            text: 'Juega',
            ico: 'fas fa-gamepad',
            path: Routes.GAME
        },
        {
            id: 'nav-forum',
            text: 'Conoce',
            ico: 'fab fa-earlybirds',
            path: Routes.FORUM
        },
        {
            id: 'nav-about',
            text: 'Nosotros',
            ico: 'fas fa-users',
            path: Routes.ABOUT
        },
    ]

    useEffect(() => {
        FIREBASE.auth.onAuthStateChanged(async (user) => {
            if (user) {
                // User is signed in.
                let uid = user.uid;
                // console.log('uid', uid);

                await FIREBASE.db.ref(`users/${uid}`).on('value', (snapshot) => {
                    const userData = [];
                    const user = snapshot.val();
                    const userId = snapshot.key;
                    /*userData.push({
                        key: userId,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        nickName: user.nickname
                    });
                    dataSource = [
                        ...userData
                    ]*/
                    const name = (user.firstName + " " + user.lastName);
                  // const name =( "usuario");

                    console.log('userData:', user);
                    console.log('dataName:', name);
                    setUserName(name);
                    setCurrentUser(uid);
                    setLoged(true)
                    setIsLoading(true);
                });

                history.push(Routes.HOME);

            } else {
                // User is signed out.
                console.log('user loggedOut');
                history.replace(Routes.LOGIN);
                setLoged(false);
            }
        });

        return () => {
            console.log('UNSUBSCRIBE');
            FIREBASE.db.ref(`users/${currentUser}`).off();
        };
    }, []);

    useEffect(() => {
        let navLinksUser = [];
        loged === true
            ? navLinksUser = [
                ...navLinksInit,
                {
                    id: 'nav-user',
                    text: userName,
                    path: Routes.HOME,
                    icon: 'far fa-grin-beam',
                }
            ]
            : navLinksUser = [
                ...navLinksInit,
                {
                    id: 'nav-login',
                    text: 'Iniciar Sesión',
                    icon: 'i',
                    path: Routes.LOGIN
                },
                {
                    id: 'nav-register',
                    text: 'Registrarse',
                    icon: '',
                    path: Routes.REGISTER
                }
            ]
        setNavLinks(navLinksUser);

    }, [loged]);

    return (
        <>
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
        </>
    );
}

export default App;