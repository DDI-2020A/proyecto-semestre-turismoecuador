import * as React from "react";
import MapaProv from "../Components/MapaProv";
import '../Styles/About.css';
import Carousel from "../Components/Carousel";
import {Card} from 'antd';

const Forum = () => {
    // -------- CardStyles --------

    const StyleCard = {
        borderRadius: '16px',
        marginRight: '5%',
        marginLeft: '5%',
        boxShadow: '-10px -10px #C9C9C9',
        backgroundColor: '#E5E5E5',
        borderColor: '#E5E5E5'
    }

return (
        <>
                <br/>
                <Card key = {'49'} bordered={true} style={ StyleCard } >
                    <div className="letter">FORO TURISMOECUADOR</div>
                </Card>
            <Carousel/>
            <br/>
            <div>
                <Card key = {'49'} bordered={true} style={ StyleCard }>
                    <h4> Bienvenido, para que puedas conocer algunos lugares turísticos que posee el Ecuador
                        debes seleccionar cualquier provincia que se encuentra en el mapa; al colocar el cursor
                        en la provincia podrás observar el nombre de cada una de ellas. Diviértete!.
                    </h4>
                </Card>

            </div>            
            <MapaProv/>
            
        </>
    );
};
export default Forum;