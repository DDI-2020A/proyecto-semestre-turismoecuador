import React from "react";
import ForumInformation from "../../Components/ForumInformationOriente";

const Zamora = () => {

    let province = 'zamoraChinchipe';
    let nameProvince = 'Zamora Chinchipe';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Zamora;