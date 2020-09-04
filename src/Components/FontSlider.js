import React from "react";
import Item from "../Components/Item";
import "../Styles/styles.css";
import {Row, Col, Carousel} from "antd";


function FontSlider() {
    return (
        <>
            <Carousel autoplay>
                <Item>
                    <div className="fondo-imagen1 config-image">
                        <h6 className="title-image">fotografia : Fernando zhiminaicela</h6>
                    </div>
                </Item>
                <Item>
                    <div className="fondo-imagen2 config-image">
                        <h6 className="title-image">fotografia: 472619</h6>
                    </div>
                </Item>
                <Item>
                    <div className="fondo-imagen3 config-image">
                        <h6 className="title-image">fotografia: Alejomiranda</h6>
                    </div>
                </Item>
                <Item>
                    <div className="fondo-imagen4 config-image">
                        <h6 className="title-image">fotografia: Mario Scheammborn</h6>
                    </div>
                </Item>
                <Item>
                    <div className="fondo-imagen5 config-image">
                        <h6 className="title-image">fotografia: Marisa04</h6>
                    </div>
                </Item>
                <Item>
                    <div className="fondo-imagen6 config-image">
                        <h6 className="title-image">fotografia: PublicDomainPicture</h6>
                    </div>
                </Item>
            </Carousel>
        </>
    );
}

export default FontSlider;

