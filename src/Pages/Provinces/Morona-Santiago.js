import React, {useState, useEffect} from "react";
import { Carousel, Row, Col, Card } from 'antd';
import FIREBASE from '../../Firebase'
import '../../Styles/Carousel.scss';
import '../../Styles/Forum.css';

const MoronaSantiago = () => {

    const [ dataSource, setDataSource ] = useState( );

    // -------- CardStyles --------

    const StyleCardPrincipal = {
        borderRadius: '16px',
        marginRight: '2%',
        marginLeft: '2%',
        backgroundColor: '#E5E5E5'
    }

    const StyleCard = {
        borderRadius: '16px',
        marginRight: '5%',
        marginLeft: '5%',
        boxShadow: '-10px -10px #36F59E',
        backgroundColor: '#C9EDDC',
        borderColor: '#C9EDDC'
    }

    useEffect( () => {
        const getProvince = async() => {
          FIREBASE.db.ref( 'regions' ).on( 'value', ( snapshot ) => {
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
          } );
        };
        getProvince();
        return () => {
          FIREBASE.db.ref('regions').off();
      };
      }, []);

    return (
        <>
            {
                dataSource
                ? 
                dataSource.map((region, index) => (
                region.key === 'Oriente' || region.provinces === 'moronaSantiago'?
                <>
                    <h3 className = "titleOriente">Morona Santiago</h3>
                    <Carousel autoplay >
                        <div>
                            <Card title={ region.provinces.moronaSantiago.images.image1.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.moronaSantiago.images.image1.photoPlace }/>
                            </Card>
                        </div>
                        <div>
                            <Card title={ region.provinces.moronaSantiago.images.image2.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.moronaSantiago.images.image2.photoPlace }/>
                            </Card>                        
                        </div>
                        <div>
                            <Card title={ region.provinces.moronaSantiago.images.image3.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.moronaSantiago.images.image3.photoPlace }/>
                            </Card>                        
                        </div>
                        <div>
                            <Card title={ region.provinces.moronaSantiago.images.image4.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.moronaSantiago.images.image4.photoPlace }/>
                            </Card>                    
                        </div>
                    </Carousel>
                    <div className="site-card-wrapper">
                            <br/>
                            <Row gutter={16}>
                            <Col span={12}>
                                <Card title="Región" bordered={true} style={ StyleCard }>
                                { region.key }
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Capital" bordered={true} style={ StyleCard }>
                                { region.provinces.moronaSantiago.capital }
                                </Card>
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                            <Col span={12}>
                                <Card title="Actividades" bordered={true} style={ StyleCard }>
                                { region.provinces.moronaSantiago.activities }
                                </Card>
                            </Col>
                            <Col key={ `province1-${ index }` } span={12}>
                                <Card title="Comida típica" bordered={true} style={ StyleCard }>
                                { region.provinces.moronaSantiago.food }
                                </Card>
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                            <Col span={24}>
                                <Card title="Descripción" bordered={true} style={ StyleCard }>
                                { region.provinces.moronaSantiago.description }
                                </Card>
                            </Col>
                            </Row>                            
                        </div>,                
                </>
                : ''
            )) : '...cargando'}
        </>
    );
};
export default MoronaSantiago;