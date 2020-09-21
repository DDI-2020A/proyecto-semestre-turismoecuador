import React, {useEffect, useState} from "react";
import QuestionForm from "../Components/QuestionForm";
import {useParams} from "react-router";
import ModalQuestions from '../Components/ModalQuestions';

const Question = () => {

    let {region} = useParams();
    console.log('region', region);
    return (
        <div style={{backgroundColor:'#2EC4B6'}}>
            <QuestionForm region={region}/>
        </div>
    );
};

export default Question;