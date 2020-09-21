import React, {Component, useState} from "react";
import Mapsvg from "../Components/Mapsvg";
import {useParams} from "react-router";
import '../Styles/styles.css';
import QuestionForm from "../Components/QuestionForm";

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