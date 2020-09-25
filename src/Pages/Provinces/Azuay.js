import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Azuay = () => {

    let province = 'azuay';
    let nameProvince = 'Azuay';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Azuay;