import React from 'react';
import 'antd/dist/antd.css';
import 'antd/lib/style/themes/default.less';
import '../Styles/Answer.css';
import Modal from '../Components/Answer';
import { Button, Row ,Col} from "antd";
import "../Styles/styles.css";


  class ModalAnswer extends React.Component  {

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
                  <div className="main-provincia fondo-imagen5">
                    <Row>
                    <Button className="open-modal-btn" onClick={this.openModalHandler}>Provincia</Button>
                     </Row>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                            <div className="modal-answer"></div>
                             <Row>
                             <Col span={24}>
                             <div className="container-answer">
                              <p>La Provincia de Galápagos es una de las 24 provincias que conforman la República del Ecuador, ubicado a 1000 km de la costa del Ecuador continental. Su territorio está formado por el Archipiélago de Colón, también conocido como "Islas Galápagos", de la cual adopta su nombre. En total son 13 islas grandes, 6 medianas y 107 islotes y rocas las que conforman el archipiélago. La capital administrativa es la ciudad de Puerto Baquerizo Moreno, mientras la urbe más grande y poblada es Puerto Ayora. Ocupa un territorio de unos 8.010 km²</p>                       
                            </div>  
                             </Col>
                            </Row>  
                     
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


export default ModalAnswer;