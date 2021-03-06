import React from "react";
import QuestionForm from "../Components/QuestionForm";
import {useParams} from "react-router";
import '../Styles/Question.css'

const Question = () => {

    let {region} = useParams();
    console.log('region', region);
    return (
        <div className={'container-game'}>
            <QuestionForm region={region}/>
        </div>
    );
};

export default Question;