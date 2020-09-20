import React, {useState, useEffect} from "react";
import '../Styles/Forum.css';
import '../Styles/Carousel.scss';
import { Carousel, Row, Col } from 'antd';
import FIREBASE from '../Firebase';

const Forum = () => {

    const [ dataSource, setDataSource ] = useState( );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        const getProvince = async() => {
          FIREBASE.db.ref( 'regiones' ).on( 'value', ( snapshot ) => {
            const dataSource = [];
            snapshot.forEach( ( data ) => {
              const region = data.val();
              const regionId = data.key;
              dataSource.push( {
                key: regionId,
                color: region.color,
                provinces: region.provinces
              } );
            } );
            setDataSource(dataSource);
            console.log('dataSource', dataSource)
            setIsLoading( false );
          } );
        };
        getProvince();
      }, [] );

    return (
        <>
            {
                dataSource
                ? 
                dataSource.map((region, index) => (
                region.key === 'costa' ?
                <>
                    <Carousel autoplay >
                        <div>
                            <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.images.image1.photoPlace }/>
                        </div>
                        <div>
                            <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.images.image2.photoPlace }/>
                        </div>
                        <div>
                            <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.images.image3.photoPlace }/>
                        </div>
                        <div>
                            <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.images.image4.photoPlace }/>
                        </div>
                    </Carousel>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                <br/>
                                <strong key = {index = 5} >Región:</strong> {region.key} <br/>
                                <br/>
                                <strong key = {index = 6} >Provincia:</strong> { region.provinces.nameProvinces } <br/>
                                <br/>                                
                                <strong key = {index = 7} >Capital:</strong> { region.provinces.capital } <br/>
                                <br/>
                                <strong key = {index = 8} >Actividades:</strong> { region.provinces.activities } <br/>
                                <br/>
                                <strong key = {index = 9} >Comida típica:</strong> {region.provinces.food} <br/>
                                <br/>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                        </Row>,                
                </>
                : ''
            )) : '...cargando'}
        </>
    );
};
export default Forum;