import React, {useState} from "react";
import {Col, Row, Image, Button, Tooltip, Radio} from 'antd';
import avatar1 from '../Images/avatar1.svg';
import avatar2 from '../Images/avatar2.svg';
import avatar3 from '../Images/avatar3.svg';
import '../Styles/SelectAvatar.scss'

const avatars = {
    avatar1,
    avatar2,
    avatar3
};

const getAvatar = () => {
    const avatarOptions = [];
    for (let avatarKey in avatars) {

        console.log('avatarKey', avatarKey);
        avatarOptions.push(
            {
                label:
                    <Col span={24}>
                        <img className={'avatar'} src={avatars[avatarKey]} alt='' height={150}/>
                    </Col>,
                value: avatarKey
            }
        );
    }

    console.log('avatarOptions', avatarOptions);
    return avatarOptions;
};


const SelectAvatar = ({handleOnclickContinue}) => {

    return (
        <div style={{backgroundColor: '#96E2D9', height: 'auto'}}>
            <Row>
                <h2 style={{color: '#011627', margin: '30px 10px'}}>
                    Elige un acompañante:
                </h2>
            </Row>
            <Row
                style={{textAlign: 'center', height: 'auto'}}>
                <Radio.Group
                    className='avatar-buttons'
                    options={getAvatar()}
                    optionType='button'
                    style={{width: '100%'}}
                />
            </Row>
            <Row>
                <Col span={24} style={{textAlign: 'center', marginTop: '60px'}}>
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