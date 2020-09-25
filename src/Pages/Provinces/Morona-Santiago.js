import React from "react";
import ForumInformation from "../../Components/ForumInformationOriente";

const MoronaSantiago = () => {

    let province = 'moronaSantiago';
    let nameProvince = 'Morona Santiago';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default MoronaSantiago;