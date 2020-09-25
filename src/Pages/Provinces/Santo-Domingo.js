import React from "react";
import ForumInformation from "../../Components/ForumInformationCosta";

const SantoDomingo = () => {

    let province = 'santoDomingoTsáchilas';
    let nameProvince = 'Santo Domingo de los Tsáchilas';
    console.log('region', nameProvince);
    return (
            <ForumInformation province = {province} nameProvince = {nameProvince}/>
    );

};
export default SantoDomingo;