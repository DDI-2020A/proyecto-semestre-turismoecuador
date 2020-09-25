import React from "react";
import ForumInformation from "../../Components/ForumInformationInsular";

const Galapagos = () => {

    let province = 'galápagos';
    let nameProvince = 'Galápagos';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Galapagos;