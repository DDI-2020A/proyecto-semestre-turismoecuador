import React from "react";
import ForumInformation from "../../Components/ForumInformationSierra";

const Chimborazo = () => {

    let province = 'chimborazo';
    let nameProvince = 'Chimborazo';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default Chimborazo;