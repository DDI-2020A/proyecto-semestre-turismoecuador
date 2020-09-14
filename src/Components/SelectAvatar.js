import React from "react";
import {Col, Row, Button} from 'antd';
import avatar1 from '../Images/avatar1.svg';
import avatar2 from '../Images/avatar2.svg';
import avatar3 from '../Images/avatar3.svg';
import '../Styles/SelectAvatar.css'

const SelectAvatar = ({handleOnclickContinue}) => {

    return (
        <div style={{
            backgroundColor: '#96E2D9',
            height: '500px'
        }}>
            <Row>
                <h2 style={{color: '#011627', margin: '30px 10px'}}>
                    Elige un acompañante:
                </h2>
            </Row>
            <Row
                style={{
                    textAlign: 'center',
                    height: '30%'
                }}
            >
                <Col xs={12} md={8}>
                    <img
                        alt = "avatar1"
                        src={avatar1}
                        className={'avatar'}
                    />
                </Col>
                <Col xs={12} md={8}>
                    <img
                        alt = "avatar2"
                        src={avatar2}
                        className={'avatar'}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <img
                        alt = "avatar3"
                        src={avatar3}
                        className={'avatar'}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{textAlign: 'center', marginTop:'60px'}}>
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