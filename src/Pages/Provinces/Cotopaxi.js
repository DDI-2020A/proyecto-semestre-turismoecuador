import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Cotopaxi = () => {

    let province = 'cotopaxi';
    let nameProvince = 'Cotopaxi';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Cotopaxi;