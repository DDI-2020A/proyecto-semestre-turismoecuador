import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Carchi = () => {

    let province = 'carchi';
    let nameProvince = 'Carchi';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Carchi;