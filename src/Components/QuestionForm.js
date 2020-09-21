import React, {useEffect, useState} from "react";
import {Row, Col, Menu} from "antd";
import FIREBASE from "../Firebase";
import {Link} from "react-router-dom";
import Button from "antd/es/button";

const QuestionForm = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [textQuestion, setTextQuestion] = useState(null);
    const [op1, setOp1] = useState(null);
    const [op2, setOp2] = useState(null);
    const [op3, setOp3] = useState(null);
    const [op4, setOp4] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getQuestion = async () => {
            await FIREBASE.db.ref(`regions/Costa/questions/0`).on('value', (snapshot) => {
                let questionData = [];
                const question = snapshot.val();
                const questionId = snapshot.key;

                console.log('questionData:', question);

                setLoading(true);
                setData(questionData);
                setCurrentQuestion(questionId);
                setTextQuestion(question.text);
                setOp1(question.option.option1);
                setOp2(question.option.option2);
                setOp3(question.option.option3);
                setOp4(question.option.option4);
            });
        };
        getQuestion();
        console.log('data2:', data);

        return () => {
            FIREBASE.db.ref('regions/Costa/questions/0').off();
        };

    }, []);

    return (
        <>
            <Row style={{textAlign: 'center', backgroundColor: '#96E2D9'}}>
                <Col span={24}>
                    <h1>Bienvenido al juego de preguntas</h1>
                </Col>
            </Row>
            <Row style={{padding: '50px', backgroundColor: '#96E2D9', textAlign: 'center'}}>
                <Col span={24}>
                    <p>{textQuestion}</p>
                </Col>
                <Col span={24}>
                    <Button>{op1}</Button>
                    <Button>{op2}</Button>
                </Col>
                <Col span={24}>
                    <Button>{op3}</Button>
                    <Button>{op4}</Button>
                </Col>
            </Row>
        </>
    );
};

export default QuestionForm;