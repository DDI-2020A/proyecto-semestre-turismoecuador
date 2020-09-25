import React from "react";
import ForumInformation from "../../Components/ForumInformationOriente";

const Pastaza = () => {

    let province = 'pastaza';
    let nameProvince = 'Pastaza';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Pastaza;