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
    let [userName, setUserName] = useState('User');
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
        FIREBASE.auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                let uid = user.uid;
                // console.log('uid', uid);
                setCurrentUser(uid);
                history.push(Routes.HOME);
                setLoged(true)
            } else {
                // User is signed out.
                console.log('user loggedOut');
                history.replace(Routes.LOGIN);
                setLoged(false);
            }
        });

        return () => {
            console.log('UNSUBSCRIBE');
        };
    });

    useEffect(() => {
        console.log('Logeado: ', loged);
        const getUser = async () => {
            FIREBASE.db.ref(`users/${currentUser}`).on('value', (snapshot) => {
                const userData = [];
                const user = snapshot.val();
                const userId = snapshot.key;
                userData.push({
                    key: userId,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    nickName: user.nickname
                });
                dataSource = [
                    ...userData
                ]
                const name = (dataSource[0].firstName + " " + dataSource[0].lastName);

                console.log('userData:', user);
                console.log('dataName:', name);
                setUserName(name);

            });
        };
        getUser();

        return () => {
            FIREBASE.db.ref('users').off();
        };
    }, [loged]);

    useEffect(() => {
        let navLinksUser = [];
        loged === true
            ? navLinksUser = [
                ...navLinksInit,
                {
                    id: 'nav-user',
                    text: userName,
                    path: Routes.HOME,
                    icon: ''
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