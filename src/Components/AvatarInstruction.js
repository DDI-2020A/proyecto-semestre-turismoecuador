import React, {useState} from 'react';
import 'antd/dist/antd.css';
import 'antd/lib/style/themes/default.less';
import '../Styles/ModalAvatar.scss';
import Modal from '../Components/ModalAvatar';
import {Row, Col} from "antd";
import avatar0 from "../Images/avatar0.svg" ;
import avatar1 from "../Images/avatar1.svg" ;
import avatar2 from "../Images/avatar2.svg" ;
import Mapsvg from "../Components/Mapsvg" ;


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


// class AvatarInstruction extends React.Component  {
const AvatarInstruction = ({avatarKey}) => {

    const [isShowing, setIsShowing] = useState(false);

    const openModalHandler = () => {
        setIsShowing(true);
    }

    const closeModalHandler = () => {
        setIsShowing(false);
    }



    return (
        <>
            <Row>

                <Col span={12}>
                    <div>
                        {
                            isShowing === true
                                ? <div onClick={closeModalHandler} className="back-drop"/>
                                : null
                        }
                        <Row>
                            <Col xs={8}>
                                <img size={20} src={avatars[avatarKey].src} alt="error" className="open-modal-btn"
                                     onClick={openModalHandler}/>
                            </Col>

                            <Col xs={16}>
                                <Modal
                                    className="modal"
                                    show={isShowing}
                                    close={closeModalHandler}>

                                    <div className="modal-answer"/>
                                    <Row>
                                        <Col span={24}>
                                            <div className="container-answer">
                                                <p>Bienvenido al juego interactivo de preguntas para conocer el
                                                    Ecuador</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Modal>
                                                    
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>

        </>
    );

}
export default AvatarInstruction;