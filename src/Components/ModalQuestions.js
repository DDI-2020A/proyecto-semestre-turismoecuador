import React from 'react';
import 'antd/dist/antd.css';
import 'antd/lib/style/themes/default.less';
import '../Styles/Modal.css';
import Modal from '../Components/Modal';
import { Button, Row ,Col} from "antd";
import "../Styles/styles.css";


  class ModalQuestions extends React.Component  {

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

    render () {
        return (

           <Row>
              

            <Col span={24}>
            <div className="modal-questions">
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                    <Row>
                      <Col span={23}>
                  <div className="main-provincia fondo-imagen4">
                    <Row>
                    <Button className="open-modal-btn" onClick={this.openModalHandler}>Provincia</Button>
                     </Row>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                              <div className="container">
                    <Row>
                       <Col span={12}><Button className="color-btn-answer">Respuesta 1</Button></Col>
                        <Col span={12}><Button className="color-btn-answer">Respuesta 2</Button></Col>
                     </Row>
                     <Row>
                       <hr></hr>
                     </Row>
                     <Row>
                         <Col span={12}><Button className="color-btn-answer">Respuesta 3 </Button></Col>
                         <Col span={12}><Button className="color-btn-answer">Respuesta 4</Button></Col>
                     </Row> 
                  </div>     
                </Modal>
                </div>
                </Col>
                </Row>
            </div>
            </Col>

           
           </Row>
            
            
        );
    }
}


export default ModalQuestions;