import React from "react";
import ForumInformation from "../../Components/ForumInformationCosta";

const Manabi = () => {

    let province = 'manabí';
    let nameProvince = 'Manabí';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Manabi;