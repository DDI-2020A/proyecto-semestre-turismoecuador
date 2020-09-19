import React, {Component, useState} from "react";
import Mapsvg from "../Components/Mapsvg";
import {useParams} from "react-router";

const Map = () => {

    let {avatar} = useParams();
    console.log('id', avatar);
    return (
        <>
            <Mapsvg avatarKey={avatar}/>
        </>
    );
}

export default Map;