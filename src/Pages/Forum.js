import React from "react";
import '../Styles/Forum.css';
import { Carousel, Row, Col } from 'antd';
import image1 from '../Images/img1.jpg';
import image2 from '../Images/img2.jpg';
import image3 from '../Images/img3.jpg';
import image4 from '../Images/img4.jpg';
import Mapa from "../Components/Mapa";

const Forum = () => {
    return (
        <>
                <Carousel autoplay>
                    <div>
                        <img className="contentStyle" src={ image1 }/>
                    </div>
                    <div>
                        <img className="contentStyle" src={ image2 }/>
                    </div>
                    <div>
                        <img className="contentStyle" src={ image3 }/>
                    </div>
                    <div>
                        <img className="contentStyle" src={ image4 }/>
                    </div>
                </Carousel>
            <div className="information">
                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <br/>
                        <strong>Nombre Oficial:</strong> República de Ecuador<br/>
                        <br/>
                        <strong>Extensión:</strong> 256.370 KM2<br/>
                        <br/>
                        <strong>Capital:</strong> Quito<br/>
                        <br/>
                        <strong>Forma de Gobierno:</strong> República<br/>
                        <br/>
                        <strong>Presidente:</strong> Lenin Moreno<br/>
                        <br/>
                        <strong>Idioma Oficial:</strong> ”El castellano es el idioma oficial del Ecuador; el castellano, el kichwa y el shuar son idiomas oficiales de relación intercultural.
                        Los demás idiomas ancestrales son de uso oficial para los pueblos indígenas en las zonas donde habitan y en los términos que fija la ley.
                        El Estado respetará y estimulará su conservación y uso”<br/>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                </Row>,
            </div>
            <Mapa/>
        </>
    );
};
export default Forum;