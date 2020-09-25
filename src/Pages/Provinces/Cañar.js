import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Cañar = () => {

    let province = 'cañar';
    let nameProvince = 'Cañar';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Cañar;