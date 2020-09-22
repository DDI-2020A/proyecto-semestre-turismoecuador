import React, {useEffect, useState} from "react";
import {Row, Col, Button, Modal} from "antd";
import FIREBASE from "../Firebase";
import {Link} from "react-router-dom";
import '../Styles/Question.css';
import Routes from "../Constants/routes";
import trofeo from '../Images/trofeo.svg'
import medalla from '../Images/medalla.svg'
import medallaParticipar from '../Images/medalla-2.svg'

const QuestionForm = ({region}) => {
    const [numberQuestion, setNumberQuestion] = useState(0);
    const [textQuestion, setTextQuestion] = useState(null);
    const [data, setData] = useState(null);
    const [op1, setOp1] = useState(null);
    const [op2, setOp2] = useState(null);
    const [op3, setOp3] = useState(null);
    const [op4, setOp4] = useState(null);
    const [answerCorrect, setAnswerCorrect] = useState(null);
    const [explication, setExplication] = useState(null);
    const [score, setScore] = useState(null);

    const [answer, setAnswer] = useState(null);
    const [stateQuestion, setStateQuestion] = useState(null);
    let [newScore, setNewScore] = useState(0);
    let [scoreTotal, setScoreTotal] = useState(0);

    const [state, setState] = useState(false);

    useEffect(() => {
        if (numberQuestion <= 9) {
            const getQuestion = async () => {
                await FIREBASE.db.ref(`regions/${region}/questions/${numberQuestion}`).on('value', (snapshot) => {
                    let questionData = [];
                    const question = snapshot.val();
                    const questionId = snapshot.key;

                    console.log('questionData:', question);
                    setData(questionData);

                    setTextQuestion(question.text);
                    setOp1(question.option.option1);
                    setOp2(question.option.option2);
                    setOp3(question.option.option3);
                    setOp4(question.option.option4);
                    setAnswerCorrect(question.answer);
                    setExplication(question.explication);
                    setScore(question.score);

                });
            };
            getQuestion();
            console.log('data:', data);
        }

        return () => {
            FIREBASE.db.ref(`regions/${region}/questions/${numberQuestion}`).off();
        };

    }, [numberQuestion]);

    const handleAnswer = () => {
        console.log('answer', answer);
        console.log('answerCorrect', answerCorrect);
        if (answer === answerCorrect) {
            setStateQuestion('Lo lograste');
            showModal();
            addScore(score);
            addScoreTotal(score);
        } else {
            addScoreTotal(score);
            setStateQuestion('Fallaste');
            showModal();
        }
    };
    const handleOption = (op) => {
        setAnswer(op);
        console.log('option', op);
    };

    const handleNextQuestion = () => {
        setNumberQuestion(numberQuestion + 1);
    };

    const addScore = (score) => {
        setNewScore(newScore + score);
        console.log('NewScore', newScore);
    };
    const addScoreTotal = (score) => {
        setScoreTotal(scoreTotal + score);
        console.log('scoreTotal', scoreTotal);
    };

    //Modal
    const showModal = () => {

        setState(true);

    };

    const handleOk = (e) => {
        console.log(e);
        handleNextQuestion();
        setState(false);
    };

    const handleCancel = e => {
        console.log(e);
        handleNextQuestion();
        setState(false);
    };

    return (
        <div style={{padding: '50px', textAlign: 'center'}}>
            {
                numberQuestion <= 9
                    ? <div>
                        <Row>
                            <Col span={24}>
                                <h1>Bienvenido al juego de preguntas</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{textAlign: 'left'}}>
                                <h1>Puntaje: {newScore}</h1>
                            </Col>
                        </Row>
                        <Row style={{padding: '10px', backgroundColor: '#2EC4B6'}}>
                            <Col span={24}>
                                <h4>{textQuestion}</h4>
                            </Col>
                        </Row>
                        <Row style={{background: '#7F8B92', height: '20em'}}>
                            <Col xs={24} md={12} className={'option-container'}>
                                <Button
                                    className={'btn-continue btn-option'}
                                    onClick={() => handleOption(op1)}
                                >
                                    {op1}
                                </Button>
                            </Col>
                            <Col xs={24} md={12} className={'option-container'}>
                                <Button
                                    className={'btn-continue btn-option'}
                                    onClick={() => handleOption(op2)}
                                >
                                    {op2}
                                </Button>
                            </Col>
                            <Col xs={24} md={12} className={'option-container'}>
                                <Button
                                    className={'btn-continue btn-option'}
                                    onClick={() => handleOption(op3)}
                                >
                                    {op3}
                                </Button>
                            </Col>
                            <Col xs={24} md={12} className={'option-container'}>
                                <Button
                                    className={'btn-continue btn-option'}
                                    onClick={() => handleOption(op4)}
                                >
                                    {op4}
                                </Button>
                            </Col>
                            <Col span={24}>
                                <Button
                                    onClick={handleAnswer}
                                    primary
                                >
                                    Enviar
                                </Button>
                                <Modal
                                    title={stateQuestion}
                                    visible={state}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                >
                                    <p>{explication}</p>
                                </Modal>
                            </Col>
                        </Row>
                    </div>
                    : <div>
                        <h1>Fin del Juego</h1>
                        {
                            newScore >= (scoreTotal * 0.7)
                                ? <div>
                                    <img className={'ico-trofeo'} src={trofeo}/>
                                    <h1>Felicidades conoces mucho sobre el Ecuador</h1>
                                </div>
                                : (
                                    newScore >= (scoreTotal * 0.5)
                                        ? <div>
                                            <img className={'ico-trofeo'} src={medalla}/>
                                            <h1>Felicidades conoces un poco sobre el Ecuador</h1>
                                        </div>
                                        : <div>
                                            <img className={'ico-trofeo'} src={medallaParticipar}/>
                                            <h1>Te hace falta conocer más sobre el Ecuador</h1>
                                            <h1>Te invitamos a seguir navengando en la página para que conozcas más</h1>
                                        </div>
                                )
                        }
                        <h1>Puntaje: {newScore}/{scoreTotal}</h1>
                        <Button
                            className={'btn-continue'}
                        >
                            <Link to={Routes.GAME}>Jugar De nuevo</Link>
                        </Button>
                    </div>
            }
        </div>
    );
};

export default QuestionForm;