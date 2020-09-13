import React from 'react';
import 'antd/dist/antd.css';
import '../Styles/Modal.css';
import '../Styles/App.css';
import { Button, Row,Col } from "antd";

const Modal = (props) => {
    return (
        <>
 
        <div>
            
            <div className="modal-wrapper "
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                   <div className="modal-header">
                    <Row>
                        <Col span={22}>
                        <h3 >Sección de preguntas</h3>    
                        </Col >
                        <Col span={2}>
                        
                        <span className="close-modal-btn" onClick={props.close}><div className="container-close">X</div></span>
                        
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
                    <Button className="btn-cancel" onClick={props.close}>CERRAR</Button>
                    <Button className="btn-continue">CONTINUAR</Button>
                    </Row>
                </div>
            </div>
        </div>
 
        </>
    )
}

export default Modal;
