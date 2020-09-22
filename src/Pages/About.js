import React from "react";
import {Col, Image, Row} from "antd";
import '../Styles/About.css';
import {Typography} from 'antd';
import logo from '../Images/logo.svg'

const About = () => {

    const {Title} = Typography;

    return (
        <>
            <div className="header">
                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        {/*<br/>*/}
                        <div className="letter">PROYECTO TURISMOECUADOR</div>
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <div className={'image-about'}>
                            <Image src={logo}/>
                        </div>
                        <div>
                            <h4> Esta página web se creó con el objetivo de incentivar el turismo en el Ecuador mediante
                                la
                                implementación de un foro por cada provincia y un juego de preguntas por cada región del
                                país.</h4>
                        </div>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                </Row>
            </div>
        </>
    );
};
export default About;