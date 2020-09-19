import React from "react";
import '../Styles/Spinner.scss';
import {Modal, Button} from 'antd';

class Spinner extends React.Component {
    state = {visible: true};

    render() {
        return (
            <Modal
                title="Verificando"
                visible={true}
            >
                <div className='container'>
                    <div className='spinner-container'>
                        <div className="spinner-path">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Spinner;