import React from "react";
import ForumInformation from "../../Components/ForumInformationCosta";

const Guayas = () => {

    let province = 'guayas';
    let nameProvince = 'Guayas';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Guayas;