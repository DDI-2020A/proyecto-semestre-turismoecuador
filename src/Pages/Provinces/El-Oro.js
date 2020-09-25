import React from "react";
import ForumInformation from "../../Components/ForumInformationCosta";

const ElOro = () => {

    let province = 'elOro';
    let nameProvince = 'El Oro';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default ElOro;