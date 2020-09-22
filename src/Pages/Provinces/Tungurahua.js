import React, {useState, useEffect} from "react";
import { Carousel, Row, Col, Card, Modal, Button } from 'antd';
import FIREBASE from '../../Firebase'
import '../../Styles/Carousel.scss';
import '../../Styles/Forum.css';

const Tungurahua = () => {

    const [ dataSource, setDataSource ] = useState( );

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
                region.key === 'Sierra' || region.provinces === 'tungurahua'?
                <>
                    <Row gutter={16} justify="end">
                        <Col span={3}>
                            <App1 />
                        </Col>
                    </Row>       
                    <Carousel autoplay >
                        <div>
                            <Card title={ region.provinces.tungurahua.images.image1.namePlace } bordered={false}>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.tungurahua.images.image1.photoPlace }/>
                            </Card>
                        </div>
                        <div>
                            <Card title={ region.provinces.tungurahua.images.image2.namePlace } bordered={false}>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.tungurahua.images.image2.photoPlace }/>
                            </Card>                        
                        </div>
                        <div>
                            <Card title={ region.provinces.tungurahua.images.image3.namePlace } bordered={false}>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.tungurahua.images.image3.photoPlace }/>
                            </Card>                        
                        </div>
                        <div>
                            <Card title={ region.provinces.tungurahua.images.image4.namePlace } bordered={false}>
                                <img className="contentStyle" alt="exampleImage" key = {index} src={ region.provinces.tungurahua.images.image4.photoPlace }/>
                            </Card>                    
                        </div>
                    </Carousel>
                    <div className="site-card-wrapper">
                            <br/>
                            <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Región" bordered={true}>
                                { region.key }
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Provincia" bordered={true}>
                                Tungurahua
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Capital" bordered={true}>
                                { region.provinces.tungurahua.capital }
                                </Card>
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                            <Col span={12}>
                                <Card title="Actividades" bordered={true}>
                                { region.provinces.tungurahua.activities }
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Comida típica" bordered={true}>
                                { region.provinces.tungurahua.food }
                                </Card>
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                            <Col span={24}>
                                <Card title="Descripción" bordered={true}>
                                { region.provinces.tungurahua.description }
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
export default Tungurahua;