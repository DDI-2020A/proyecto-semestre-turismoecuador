import React from "react";
import {Col, Row, Image, Button} from 'antd';
import avatar1 from '../Images/avatar1.svg';
import avatar2 from '../Images/avatar2.svg';
import avatar3 from '../Images/avatar3.svg';
import '../Styles/SelectAvatar.css'

const SelectAvatar = ({handleOnclickContinue}) => {

    return (
        <div style={{backgroundColor: '#96E2D9'}}>
            <Row>
                <h2 style={{color: '#011627', margin: '30px 10px'}}>
                    Elige un acompañante:
                </h2>
            </Row>
            <Row
                style={{
                    textAlign: 'center',
                    padding: '10em 0px'
                }}
            >
                <Col xs={12} md={8}>
                    <Image
                        src={avatar1}
                        className={'avatar'}
                    />
                </Col>
                <Col xs={12} md={8}>
                    <Image
                        src={avatar2}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <Image
                        src={avatar3}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{textAlign: 'center'}}>
                    <Button
                        className={'btn-continue'}
                        style={{margin: '0px 0px 2em'}}
                        onClick={handleOnclickContinue}
                    >
                        Continuar
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default SelectAvatar;