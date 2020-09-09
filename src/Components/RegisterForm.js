import React, {useEffect, useState} from 'react';
import {
    Form,
    Input,
    Row,
    Col,
    Checkbox,
    Button,
    message
} from 'antd';
import '../Styles/Login.css'
import {Link} from "react-router-dom";
import Routes from "../Constants/routes";
import FIREBASE from "../Firebase";

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterForm = () => {

    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [form] = Form.useForm();

    useEffect(() => {
        const getUsers = async () => {
            FIREBASE.db.ref('users').on('value', (snapshot) => {
                const usersData = [];
                snapshot.forEach((data) => {
                    const user = data.val();
                    const userId = data.key;
                    usersData.push({
                        key: userId,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        nickname: user.nickname
                    });
                });
                console.log('usersData', usersData);
                setDataSource(usersData);
                setIsLoading(false);
            });
        };
        getUsers();

        return () => {
            FIREBASE.db.ref('users').off();
        };
    }, []);

    const handleRegister = async (values) => {
        try {
            await FIREBASE.auth.createUserWithEmailAndPassword(values.email, values.password);
            await FIREBASE.db.ref(`users/${FIREBASE.auth.currentUser.uid}`).set({
                email: values.email.toLowerCase(),
                firstName: values.firstName.toUpperCase(),
                lastName: values.lastName.toUpperCase(),
                nickname: values.nickname.toUpperCase(),
                password: values.password.toUpperCase()
            });
            message.success('Los datos se guardaron correctamente :)');


        } catch (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;

            message.error(errorMessage);
        }
    };

    return (
        <div style={{backgroundColor: '#96E2D9'}}>
            <Row>
                <Col className={'form-login'}>
                    <div style={{textAlign: 'center'}}>
                        <h1>Crea tu cuenta. Es gratis!</h1>
                    </div>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        className={'login-form'}
                        onFinish={handleRegister}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="firstName"
                            rules={[{required: true, message: 'Por favor ingresa tu nombre!'}]}
                        >
                            <Input placeholder={'Nombre'}/>
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[{required: true, message: 'Por favor ingresa tu apellido!'}]}
                        >
                            <Input placeholder={'Apellido'}/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'El correo no es válido!',
                                },
                                {
                                    required: true,
                                    message: 'Por favor ingresa tu correo!',
                                },
                            ]}
                        >
                            <Input placeholder={'Correo'}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingresa tu contraseña!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                placeholder={'Contraseña'}
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor confirma tu contraseña!',
                                },
                                ({getFieldValue}) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('Las contraseñas no coinciden!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                placeholder={'Confirma Contraseña'}
                            />
                        </Form.Item>

                        <Form.Item
                            name="nickname"
                            rules={[{required: true, message: 'Por favor ingresa un Apodo', whitespace: true}]}
                        >
                            <Input
                                placeholder={'Apodo'}
                            />
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" className={'login-form-button'}>
                                Registrarse
                            </Button>
                            <p>¿Ya tienes una cuenta? <Link to={Routes.LOGIN}> Inicia Sesión!</Link></p>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row> </Row>
        </div>
    )
        ;
};

export default RegisterForm;
