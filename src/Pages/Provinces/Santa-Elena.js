import React from "react";
import ForumInformation from "../../Components/ForumInformationCosta";

const SantaElena = () => {

    let province = 'santaElena';
    let nameProvince = 'Santa Elena';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default SantaElena;