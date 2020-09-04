import React from "react";
import { Carousel } from 'antd';
import image1 from '../Images/img1.jpg';
import image2 from '../Images/img2.jpg';
import image3 from '../Images/img3.jpg';
import image4 from '../Images/img4.jpg';
const contentStyle = {
    width: '100%' ,
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Forum = () => {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <img style={contentStyle} src={ image1 }/>
                </div>
                <div>
                    <img style={contentStyle} src={ image2 }/>
                </div>
                <div>
                    <img style={contentStyle} src={ image3 }/>
                </div>
                <div>
                    <img style={contentStyle} src={ image4 }/>
                </div>
            </Carousel>
            <div>
                Nombre Oficial: República de Ecuador<br/>

                Extensión: 256.370 KM2<br/>

                Capital: Quito<br/>

                Forma de Gobierno: República<br/>

                Presidente: Lenin Moreno<br/>

                Idioma Oficial: ”El castellano es el idioma oficial del Ecuador; el castellano, el kichwa y el shuar son idiomas oficiales de relación intercultural.
                Los demás idiomas ancestrales son de uso oficial para los pueblos indígenas en las zonas donde habitan y en los términos que fija la ley.
                El Estado respetará y estimulará su conservación y uso”<br/>

            </div>
        </>
    );
};
export default Forum;