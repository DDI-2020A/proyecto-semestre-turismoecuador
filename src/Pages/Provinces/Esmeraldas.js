import React from "react";
import ForumInformation from "../../Components/ForumInformationCosta";

const Esmeraldas = () => {

    let province = 'esmeraldas';
    let nameProvince = 'Esmeraldas';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Esmeraldas;