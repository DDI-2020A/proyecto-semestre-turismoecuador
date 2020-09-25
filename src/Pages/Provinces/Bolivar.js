import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Bolivar = () => {

    let province = 'bolívar';
    let nameProvince = 'Bolívar';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Bolivar;