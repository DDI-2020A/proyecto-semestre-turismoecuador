import React from "react";
import Routes from "../Constants/routes";
import {Link} from 'react-router-dom';
import '../Styles/Login.css'
import {Form, Input, Button, Checkbox, Row, Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LoginForm = () => {

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{backgroundColor: '#96E2D9'}}>
            <Row>
                <Col className={'form-login'}>
                    <div style={{textAlign:'center'}}>
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Por favor ingresa tu correo!' }]}
                        >
                            <Input prefix={<UserOutlined
                                className="site-form-item-icon" />}
                                   placeholder="Correo" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Contraseña"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Iniciar Sesión
                            </Button>
                            <p>¿Todavia no tienes una cuenta? <Link to={Routes.REGISTER}> Registrate!</Link></p>
                        </Form.Item>
                    </Form>

                </Col>
            </Row>
            <Row> </Row>
        </div>
    );
};
export default LoginForm;