import React, {useEffect, useState} from 'react';
import {Menu, Row, Col, Image} from 'antd';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Routes from "../Constants/routes";

const Nav = () => {
    let location = useLocation();
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        console.log('location', location.pathname.split('/'));
        const urlParts = location.pathname.split('/');
        setCurrentPage(urlParts[1] !== ''
            ? urlParts[1]
            : 'home');
    }, []);

    return (
        <Menu theme='dark'
              onClick={(e) => setCurrentPage(e.key)}
              selectedKeys={[currentPage]}
              mode='horizontal'>

            <Menu.Item key='home'>
                <Link to={Routes.HOME}>ECUADORFFF</Link>
            </Menu.Item>
            <Menu.Item key='game'>
                <Link to={Routes.GAME}>Juega</Link>
            </Menu.Item>
            <Menu.Item key='forum'>
                <Link to={Routes.FORUM}>Conoce</Link>
            </Menu.Item>
            <Menu.Item key='login'>
                <Link to={Routes.LOGIN}>Iniciar Sesión</Link>
            </Menu.Item>
            <Menu.Item key='register'>
                <Link to={Routes.REGISTER}>Registrarse</Link>
            </Menu.Item>

        </Menu>
    );
};

export default Nav;
