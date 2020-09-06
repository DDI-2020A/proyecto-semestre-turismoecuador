import React, {useState} from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    AutoComplete,
} from 'antd';
import '../Styles/Login.css'
import {Link} from "react-router-dom";
import Routes from "../Constants/routes";

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

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
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = value => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));

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
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="name"
                            rules={[{required: true, message: 'Por favor ingresa tu nombre!'}]}
                        >
                            <Input placeholder={'Nombre'}/>
                        </Form.Item>
                        <Form.Item
                            name="lastname"
                            rules={[{required: true, message: 'Por favor ingresa tu apellido!'}]}
                        >
                            <Input placeholder={'Apellido'}/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'El correo no es valido!',
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
                            rules={[{required: false, whitespace: true}]}
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
    );
};

export default RegisterForm;