import React from "react";
import {Col, Row} from "antd";
import '../Styles/About.css';
import { Typography } from 'antd';

const About = () => {

    const { Title } = Typography;

    return (
        <>
            <div className="header">
                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <br/>
                        <div className="letter">PROYECTO TURISMOECUADOR</div>
                        <br/>
                        <br/>
                        <div>
                            Esta página web para incentivar el turismo de Ecuador mediante la implementación de un foro por cada provincia y un juego de preguntas por cada región del país.
                        </div>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                </Row>
            </div>
        </>
    );
};
export default About;