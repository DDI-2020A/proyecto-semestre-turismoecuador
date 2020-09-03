import React from 'react';
import '../Styles/App.css';
import {Layout, Button, Tooltip, Divider} from 'antd';
import {Row, Col} from 'antd';
import {FacebookFilled, InstagramOutlined, TwitterOutlined, MailFilled} from '@ant-design/icons';
import Routes from "../Constants/routes";
import {Link} from "react-router-dom";

function Footer() {
    const {Footer} = Layout;

    return (
        <>
            <Footer
                style={{backgroundColor: '#011627'}}
                className={'footer-color'}
            >
                <Row style={{textAlign: 'center'}}>
                    <Col xs={24} sm={4} md={6} lg={8} xl={10}
                         style={{marginTop: '15px'}}
                    >
                        <h3>Accesos</h3>
                        <p><Link to={Routes.FORUM}>Conoce</Link></p>
                        <p><Link to={Routes.GAME}>Juega</Link></p>
                        <p><Link to={Routes.ABOUT}>Nosotros</Link></p>
                    </Col>
                    <Col xs={24} sm={16} md={12} lg={8} xl={4}
                         style={{marginTop: '15px'}}
                    >
                        <h3>Contactanos</h3>
                        <Tooltip title="Facebook">
                            <Button
                                shape="circle"
                                icon={<FacebookFilled/>}
                                style={{
                                    color: '#3b5998',
                                    margin: '5px'
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Twiter">
                            <Button
                                shape="circle"
                                icon={<TwitterOutlined/>}
                                style={{
                                    color: '#00acee',
                                    margin: '5px'
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Instagram">
                            <Button
                                shape="circle"
                                icon={<InstagramOutlined/>}
                                style={{
                                    color: 'rgb(225,48,108)',
                                    margin: '5px'
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="E-mail">
                            <Button
                                shape="circle"
                                icon={<MailFilled/>}
                                style={{
                                    color: '#7F8B92',
                                    margin: '5px'
                                }}
                            />
                        </Tooltip>

                    </Col>
                    <Col xs={24} sm={4} md={6} lg={8} xl={10}
                         style={{marginTop: '15px'}}
                    >
                        <p>Orgullosamente hecho en Ecuador</p>
                    </Col>
                </Row>
                <Divider style={{backgroundColor: '#7F8B92'}}/>
                <Row>
                    <Col span={24} style={{textAlign: 'center'}}>
                        <p className={'footer-color2'}>©2020 Created by JCCL</p>
                    </Col>
                </Row>
            </Footer>
        </>
    );
}

export default Footer;
