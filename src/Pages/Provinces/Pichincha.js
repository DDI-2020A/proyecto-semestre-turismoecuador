import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Pichincha = () => {

    let province = 'pichincha';
    let nameProvince = 'Pichincha';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Pichincha;