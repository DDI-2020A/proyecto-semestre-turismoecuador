import React from "react";
import '../Styles/App.css';
import { Menu,Row,Col,Image } from 'antd';
import 'antd/dist/antd.css';


const Nav = () =>{
        return (
            <Menu  mode="horizontal" className="Nav" id="Nav">
                <Row>
                    <Col span={6} className="logo">
                        <p><strong>ECUADORFFF</strong></p>
                    </Col>
                    <Col span={9}></Col>
                    <Col flex="auto">
                        <Row>
                            <Col flex={1}>
                                <Menu.Item key="juega">
                                 <a href="www.google.com" target="_blank" rel="noopener noreferrer">
                                    Juega
                                 </a>
                                </Menu.Item>
                            </Col>
                            <Col flex={1}>
                                <Menu.Item key="conoce">
                                    <a href="www.google.com" target="_blank" rel="noopener noreferrer">
                                        Conoce
                                    </a>
                                </Menu.Item>
                            </Col>
                            <Col flex={1}>
                                <Menu.Item key="conoce">
                                    <a href="www.google.com" target="_blank" rel="noopener noreferrer">
                                        ¿Quienes somos?
                                    </a>
                                </Menu.Item>
                            </Col>
                            <Col flex={1}>
                                <Menu.Item key="conoce">
                                    <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="login">
                                        Iniciar sesión
                                    </a>
                                </Menu.Item>
                            </Col>
                            <Col flex={1}>
                                <Menu.Item key="conoce">
                                    <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="register">
                                        Resgistrarse
                                    </a>
                                </Menu.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Menu>
        );
    }


export default Nav;