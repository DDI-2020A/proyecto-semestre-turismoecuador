import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Imbabura = () => {

    let province = 'imbabura';
    let nameProvince = 'Imbabura';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Imbabura;