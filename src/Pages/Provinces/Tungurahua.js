import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Tungurahua = () => {

    let province = 'tungurahua';
    let nameProvince = 'Tungurahua';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Tungurahua;