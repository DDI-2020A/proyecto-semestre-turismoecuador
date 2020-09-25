import React from "react";
import ForumInformation from "../../Components/ForumInformationOriente";

const Orellana = () => {

    let province = 'orellana';
    let nameProvince = 'Orellana';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Orellana;