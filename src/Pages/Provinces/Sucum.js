import React from "react";
import ForumInformation from "../../Components/ForumInformationOriente";

const Sucumbios = () => {

    let province = 'sucumbíos';
    let nameProvince = 'Sucumbíos';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Sucumbios;