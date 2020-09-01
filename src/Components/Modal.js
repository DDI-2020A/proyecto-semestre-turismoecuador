import React from 'react';
import 'antd/dist/antd.css';
import '../Styles/Modal.css';
import '../Styles/App.css';
import { Button, Row } from "antd";

const Modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper "
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3 >Sección de preguntas</h3>
                    <div className="container-close">
                    <span className="close-modal-btn" onClick={props.close}>X</span>
                </div>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <Row className="opacity-modal">
                    <Button className="btn-cancel" onClick={props.close}>CERRAR</Button>
                    <Button className="btn-continue">CONTINUAR</Button>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Modal;

