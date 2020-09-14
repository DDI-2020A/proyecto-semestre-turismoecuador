import React,{ useState } from 'react';
 import '../Styles/Carousel.scss';
import ImgComponent from "../Components/ImgComponent";
import {Col,Row,Div} from 'antd'
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";

function Carousel(){
    const[x,setX] = useState(0);
    let carouselArray=[
    <ImgComponent src={img1}/>,
    <ImgComponent src={img2}/>,
    <ImgComponent src={img3}/>,
    <ImgComponent src={img4}/>,
    <ImgComponent src={img5}/>,
    <ImgComponent src={img6}/>
];
    const goLeft=()=>{
        console.log(x);
    //    setX(x+100);
    x === 0 ? setX(-100*(carouselArray.length-1)): setX(x+100);
    };

    const goRight=()=>{
        console.log(x);
         x === -100*(carouselArray.length-1) ? setX(0): setX(x-100);
    };

    return(
           <Row> 
               <Col>
               <Row>
                   <Col>
                   <div className=" ant-col-lg-24 ant-col-xs-24">
                   <div className="carousel" >
                   {carouselArray.map((item,index)=>{
                    return(
                   <    div key ={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                        </div>   
                    );
                })}
                <button id ="goLeft" onClick={goLeft}><i class="fas fa-chevron-left"></i></button>
                <button id ="goRight"onClick={goRight}><i class="fas fa-chevron-right"></i></button>
        
        </div>
                   </div>
                   </Col>
               </Row>
               </Col>

        </Row>
        
    )

}
export default Carousel;