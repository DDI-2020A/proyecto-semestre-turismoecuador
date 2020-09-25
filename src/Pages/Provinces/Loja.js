import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Loja = () => {

    let province = 'loja';
    let nameProvince = 'Loja';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Loja;