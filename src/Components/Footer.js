import React from 'react';
import '../Styles/App.css';
import {Layout, Button, Tooltip, Divider} from 'antd';
import {Row, Col} from 'antd';
import {FacebookFilled, InstagramOutlined, TwitterOutlined, MailFilled} from '@ant-design/icons';

function Footer() {
    const {Footer} = Layout;

    return (
        <>
            <Footer
                style={{backgroundColor: '#011627'}}
                className={'footer-color'}
            >
                <Row style={{textAlign: 'center'}}>
                    <Col span={8}>
                        <h3>Accesos</h3>
                        <p><a>Conoce</a></p>
                        <p><a>Juega</a></p>
                        <p><a>¿Quiénes Somos?</a></p>
                    </Col>
                    <Col span={8}>
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
                    <Col span={8}>
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
