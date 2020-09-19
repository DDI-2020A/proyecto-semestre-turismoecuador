import React, {useState} from "react";
import {Col, Row, Button, Tooltip, Radio} from 'antd';
import avatar0 from '../Images/avatar0.svg';
import avatar1 from '../Images/avatar1.svg';
import avatar2 from '../Images/avatar2.svg';
import '../Styles/SelectAvatar.scss'
import Routes from "../Constants/routes";
import {Link} from "react-router-dom";

const avatars = [
    {
        key: '0',
        src: avatar0
    },
    {
        key: '1',
        src: avatar1
    },
    {
        key: '2',
        src: avatar2
    }
];

const getAvatar = () => {
    const avatarOptions = [];
    for (let avatarKey in avatars) {

        console.log('avatarKey', avatarKey);
        avatarOptions.push(
            {
                label:
                    <Col span={24}>
                        <img className={'avatar'} src={avatars[avatarKey].src} alt='' height={150}/>
                    </Col>,
                value: avatarKey
            }
        );
    }

    console.log('avatarOptions', avatarOptions);
    return avatarOptions;
};


const SelectAvatar = () => {
    const [avatar, setAvatar] = useState(null);

    const handleAvatar = () => {
        const av = document.querySelector('input[name="avatars"]:checked').value;
        avatars.map((avatar) =>
            avatar.key === av
                ? setAvatar(avatar.key)
                : null
        )
    };

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
                    name='avatars'
                    className='avatar-buttons'
                    options={getAvatar()}
                    optionType='button'
                    style={{width: '100%'}}
                    onChange={handleAvatar}
                />
            </Row>
            <Row>
                <Col span={24} style={{textAlign: 'center', marginTop: '60px'}}>
                    <Button
                        className={'btn-continue'}
                        style={{margin: '0px 0px 2em'}}
                    >
                        <Link to={Routes.MAP + `/${avatar}`}> Continuar</Link>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default SelectAvatar;