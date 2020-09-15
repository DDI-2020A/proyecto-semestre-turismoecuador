import React from 'react';
import 'antd/dist/antd.css';
import 'antd/lib/style/themes/default.less';
import '../Styles/ModalAvatar.scss';
import Modal from '../Components/ModalAvatar';
import { Row ,Col} from "antd";
import avatar3 from "../Images/avatar3.svg" ;


  class AvatarInstruction extends React.Component  {

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
            <div >
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                    <Row>
                        <Col xs={8}>
                        <img  size={20} src={avatar3} alt="error" className="open-modal-btn" onClick={this.openModalHandler}/>
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
                            <p>Bienvenido al juego interactivo de preguntas para conocer el Ecuador</p>
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