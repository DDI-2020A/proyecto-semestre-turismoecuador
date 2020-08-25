import React from 'react';
import './App.css';
import { Card, Button } from 'antd';
import { Col, Carousel } from 'antd';

function App() {

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const { Meta } = Card;

   return (
     <div className = 'ConoceJuega'>
       <Col className="gutter-row image" span={12}>
         <Card
           cover={<img alt="example" src="https://griscv.files.wordpress.com/2016/06/1b59a-mascotasconsultaprelegislativa2013.jpg" />}
         ></Card>
       </Col>
       <Col className="gutter-row description-juega" span={12}>
         <Meta title="JUEGA!"  description="Diviérte y conoce toda lo maravilloso que ofrece ECUADOR!, Diviérte y conoce toda lo maravilloso que ofrece ECUADOR!. Diviérte y conoce toda lo maravilloso que ofrece ECUADOR!" />
         <Button type="primary" className = "button-conoce-juega"> IR A JUGAR </Button>
       </Col>

       <Col className="gutter-row description" span={12}>
         <Meta title="CONOCE!" description="Viaja por Ecuador a través de sus regiones y aprende!, Viaja por Ecuador a través de sus regiones y aprende!. Viaja por Ecuador a través de sus regiones y aprende!" />
         <Button type="primary" className = "button-conoce-juega"> CONOCER </Button>
       </Col>
       <Col className="gutter-row" span={12}>
         <Carousel autoplay className="tama-carousel">
           <div>
             <img className="tama-image" alt="example" src="https://polimundo.com/wp-content/uploads/2017/05/quilotoa1.jpg" />
           </div>
           <div>
             <img className="tama-image" alt="example" src="https://blog.rockthetraveller.com/wp-content/uploads/2018/04/Conoce-los-mejores-paisajes-del-Amazonas-en-Ecuador-slider-1200x490.jpg" />
           </div>
           <div>
             <img className="tama-image" alt="example" src="https://polimundo.com/wp-content/uploads/2017/05/cotopaxi2.jpg" />
           </div>
           <div>
             <img className="tama-image" alt="example" src="https://www.eltelegrafo.com.ec/media/k2/items/cache/1019e2c785ed4cf69e32e64e1f175676_XL.jpg" />
           </div>
         </Carousel>
       </Col>
     </div>
   );
}

export default App;
