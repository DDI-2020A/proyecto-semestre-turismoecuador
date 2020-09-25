import React from "react";
import ForumInformation from "../../Components/ForumInformationCosta";

const LosRios = () => {

    let province = 'losRíos';
    let nameProvince = 'Los Ríos';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default LosRios;