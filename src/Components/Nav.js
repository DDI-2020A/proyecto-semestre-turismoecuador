import React, {useEffect, useState} from 'react';
import {Menu, Row, Col, Image} from 'antd';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Routes from "../Constants/routes";
import FIREBASE from "../Firebase";

const {SubMenu} = Menu;

const Nav = ({hoverBackground, linkColor, navLinks, logo}) => {
    let location = useLocation();
    const [currentPage, setCurrentPage] = useState('home');

    const [navOpen, setNavOpen] = useState(0)
    const [hoverIndex, setHoverIndex] = useState(-1)

    useEffect(() => {
        console.log('location', location.pathname.split('/'));
        const urlParts = location.pathname.split('/');
        setCurrentPage(urlParts[1] !== ''
            ? urlParts[1]
            : 'home');
    }, []);


    return (

        <Menu
            theme='dark'
            onClick={(e) => setCurrentPage(e.key)}
            selectedKeys={[currentPage]}
            mode='horizontal'>
            <Image src={logo} height="40px" width="40px" alt="toolbar-logo"/>
            {navLinks.map((link, index) =>
                link.id === 'nav-user'
                    ? <SubMenu
                        key={index}
                        onMouseEnter={() => {
                            setHoverIndex(index)
                        }}
                        onMouseLeave={() => {
                            setHoverIndex(-1)
                        }}
                        style={{background: hoverIndex === index ? (hoverBackground || '#fff') : ''}}
                        icon={link.ico}
                        title={link.text}
                    >
                        <Menu.Item>
                            <Link
                                to={link.path}
                                onClick={() => FIREBASE.auth.signOut()}
                                style={{color: linkColor}}
                            >
                                <i className="fas fa-sign-out-alt"></i> Salir
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    : <Menu.Item
                        key={index}
                        onMouseEnter={() => {
                            setHoverIndex(index)
                        }}
                        onMouseLeave={() => {
                            setHoverIndex(-1)
                        }}
                        style={{background: hoverIndex === index ? (hoverBackground || '#fff') : ''}}
                    >
                        <Link
                            to={link.path}
                            style={{color: linkColor}}
                        >
                            <i
                                style={{margin:'0px 10px'}}
                                className={link.ico}
                            ></i>
                            {link.text}
                        </Link>
                    </Menu.Item>
            )}

        </Menu>
    );
};

export default Nav;
