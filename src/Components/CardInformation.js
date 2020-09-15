import React from 'react';
import '../Styles/App.css';
import {Card, Button, Image} from 'antd';
import {Col, Carousel} from 'antd';
import Routes from "../Constants/routes";
import {Link} from "react-router-dom";

function CardInformation() {

    const {Meta} = Card;

    return (
        <>
            <div
                className='ConoceJuega'
                style={{margin: '30px'}}
            >
                <Col className="gutter-row image" xs={24} md={12}>
                    <Image
                        src={"https://griscv.files.wordpress.com/2016/06/1b59a-mascotasconsultaprelegislativa2013.jpg"}
                        style={{maxWidth: '500px'}}
                    />
                </Col>
                <Col className="gutter-row description" xs={24} md={12}>
                    <Meta title="JUEGA!"
                          description="¿Qué tanto conoces Ecuador? ¿Eres de capaz de contestar preguntas sobre zonas turísticas del país? Diviérte y conoce toda lo maravilloso que ofrece ECUADOR!"/>
                    <Button type="primary" className="button-conoce-juega">
                        <Link to={Routes.GAME}> IR A JUGAR</Link>
                    </Button>
                </Col>

                <Col className="gutter-row description" xs={24} md={12}>
                    <Meta title="CONOCE!"
                          description="Ecuador posee una gran cantidad de riqueza natural y cultural; debido a las cuatro regiones que posee podemos encontrar en cada región e incluso provincia miles de especies y lugares diferentes que merecen ser visitados; en el foro podrás ver algunos de los maravillosos lugares que ofrece Ecuador."/>
                    <Button type="primary" className="button-conoce-juega">
                        <Link to={Routes.FORUM}> CONOCER</Link>
                    </Button>
                </Col>
                <Col className="gutter-row" xs={24} md={12}>
                    <Carousel autoplay className="tama-carousel">
                        <div>
                            <img className="tama-image" alt="example"
                                 src="https://polimundo.com/wp-content/uploads/2017/05/quilotoa1.jpg"/>
                        </div>
                        <div>
                            <img className="tama-image" alt="example"
                                 src="https://blog.rockthetraveller.com/wp-content/uploads/2018/04/Conoce-los-mejores-paisajes-del-Amazonas-en-Ecuador-slider-1200x490.jpg"/>
                        </div>
                        <div>
                            <img className="tama-image" alt="example"
                                 src="https://polimundo.com/wp-content/uploads/2017/05/cotopaxi2.jpg"/>
                        </div>
                        <div>
                            <img className="tama-image" alt="example"
                                 src="https://www.eltelegrafo.com.ec/media/k2/items/cache/1019e2c785ed4cf69e32e64e1f175676_XL.jpg"/>
                        </div>
                    </Carousel>
                </Col>
            </div>
        </>
    );
}

export default CardInformation;