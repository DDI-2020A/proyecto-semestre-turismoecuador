import React from "react";
import ForumInformation from "../../Components/ForumInformationOriente";

const Napo = () => {

    let province = 'napo';
    let nameProvince = 'Napo';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Napo;