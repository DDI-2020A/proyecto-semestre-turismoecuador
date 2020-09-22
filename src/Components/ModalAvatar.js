import React from 'react';
import 'antd/dist/antd.css';
import '../Styles/ModalAvatar.scss';
import '../Styles/App.css';
import {Row, Col} from "antd";

const ModalAvatar = (props) => {
    return (
        <div>
            <div className="moda-wrapper "
                 style={{
                     transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '0',
                     width: 'fit-content'
                 }}>
                <div className="modal-header">
                    <Row>
                        <Col span={22}>
                        </Col>
                        <Col span={2}>

                            <span className="close-modal-btn" onClick={props.close}><div
                                className="container-close">X</div></span>

                        </Col>
                    </Row>
                </div>
                <div className="modal-body">
                    <div>
                        {props.children}
                    </div>
                </div>
                <div className="modal-footer">
                    <Row className="opacity-modal">
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ModalAvatar;

