import React, {useState, useEffect} from "react";
import { Carousel, Row, Col, Card, Modal, Button } from 'antd';
import FIREBASE from '../../Firebase'
import '../../Styles/Carousel.scss';
import '../../Styles/Forum.css';

const Loja = () => {

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
      boxShadow: '-10px -10px #FFC370',
      backgroundColor: '#FFE7C6',
      borderColor: '#FFE7C6'
    }

    //MODAL COMMENTS
    class App1 extends React.Component {
        state = { visible: false };
      
        showModal = () => {
          this.setState({
            visible: true,
          });
        };
      
        handleOk = e => {
          console.log(e);
          this.setState({
            visible: false,
          });
        };
      
        handleCancel = e => {
          console.log(e);
          this.setState({
            visible: false,
          });
        };
      
        render() {
          return (
            <>
              <Button type="primary" onClick={this.showModal}>
                Comentarios
              </Button>
              <Modal
                title="Lista de comentarios"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </>
          );
        }
      }
    
    //--------------------

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
                region.key === 'Sierra' || region.provinces === 'loja'?
                <>
                    <Row gutter={16} justify="end">
                        <Col span={3}>
                            <App1 />
                        </Col>
                    </Row>       
                    <h3 className = "titleSierra">Loja</h3>
                    <Carousel autoplay >
                        <div>
                            <Card title={ region.provinces.loja.images.image1.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.loja.images.image1.photoPlace }/>
                            </Card>
                        </div>
                        <div>
                            <Card title={ region.provinces.loja.images.image2.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.loja.images.image2.photoPlace }/>
                            </Card>                        
                        </div>
                        <div>
                            <Card title={ region.provinces.loja.images.image3.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.loja.images.image3.photoPlace }/>
                            </Card>                        
                        </div>
                        <div>
                            <Card title={ region.provinces.loja.images.image4.namePlace } bordered={false} style={ StyleCardPrincipal }>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.loja.images.image4.photoPlace }/>
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
                                { region.provinces.loja.capital }
                                </Card>
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                            <Col span={12}>
                                <Card title="Actividades" bordered={true} style={ StyleCard }>
                                { region.provinces.loja.activities }
                                </Card>
                            </Col>
                            <Col key={ `province1-${ index }` } span={12}>
                                <Card title="Comida típica" bordered={true} style={ StyleCard }>
                                { region.provinces.loja.food }
                                </Card>
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                            <Col span={24}>
                                <Card title="Descripción" bordered={true} style={ StyleCard }>
                                { region.provinces.loja.description }
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
export default Loja;