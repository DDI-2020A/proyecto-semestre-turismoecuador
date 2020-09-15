import React from 'react';
import 'antd/dist/antd.css';
import 'antd/lib/style/themes/default.less';
import '../Styles/ModalAvatar.scss';
import Modal from '../Components/ModalAvatar';
import {Row, Col, Card} from "antd";
import avatar1 from "../Images/avatar1.svg";

class AvatarInstruction extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <Row>
                <Col span={24}>
                    <div className="modal-questions">
                        {this.state.isShowing ?
                            <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                        <Row>
                            <Col xs={8}>
                                <Card
                                    hoverable
                                    style={{width: 240}}
                                    cover={<img alt="example" src={avatar1}
                                                className="open-modal-btn" onClick={this.openModalHandler}
                                    />}
                                >
                                </Card>
                            </Col>

                            <Col xs={16}>
                                <Modal
                                    className="modal"
                                    show={this.state.isShowing}
                                    close={this.closeModalHandler}>

                                    <div className="modal-answer"></div>
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
        );
    }
}

export default AvatarInstruction;