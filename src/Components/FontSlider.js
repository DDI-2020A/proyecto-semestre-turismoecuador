import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../Components/Item";
import "../Styles/styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  //{ width: 550, itemsToShow: 2 },
  //{ width: 768, itemsToShow: 3 },
  //{ width: 1200, itemsToShow: 4 },
];

function FontSlider(){
  return (
    <>
    <div className="slider"> 
    
      <div className="main">
      <Carousel breakPoints={breakPoints}>
          <Item><div className="fondo-imagen1"><h6 className="title-image">fotografia : Fernando zhiminaicela</h6></div></Item>
          <Item><div className="fondo-imagen2"><h6 className="title-image">fotografia : 472619</h6></div></Item>
          <Item><div className="fondo-imagen3"><h6 className="title-image">fotografia : Alejomiranda</h6></div></Item>
          <Item><div className="fondo-imagen4"><h6 className="title-image">fotografia : Mario Scheammborn</h6></div></Item>
          <Item><div className="fondo-imagen5"><h6 className="title-image">fotografia : Marisa04</h6></div></Item>
          <Item><div className="fondo-imagen6"><h6 className="title-image">fotografia : PublicDomainPicture</h6></div></Item>
          <Item><div ></div></Item>
        </Carousel>
      </div>
      </div>
    </>
  );
}
export default FontSlider;

