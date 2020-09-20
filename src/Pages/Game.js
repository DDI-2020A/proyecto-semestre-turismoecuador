import React, {useEffect, useState} from 'react';
import '../Styles/styles.css';

import Mapsvg from '../Components/Mapsvg';
import SelectAvatar from "../Components/SelectAvatar";
//import ModalAnswer from '../Components/ModalAnswer';
//import ModalQuestions from './ModalQuestions';
//import Carousel from '../Components/Carousel';
import ModalQuestions from '../Components/ModalQuestions';


const Game = () => {

    const [selectAvatar, setSelectAvatar] = useState(false);

    useEffect(() => {
        console.log('Avatar seleccionado', selectAvatar)
    }, [selectAvatar]);

    const handleOnclickContinue = () => {
        setSelectAvatar(true);
    };

    const [selectQuestion, setSelectQuestion] = useState(false);
  

    useEffect(() => {
        console.log('Region Seleccionada', selectQuestion)
    }, [selectQuestion]);
  
    const handleOnclickQuestion = () => {
        setSelectQuestion(true);
    };
    


    return (
        <>
            {
                selectAvatar === false
                    ? <SelectAvatar handleOnclickContinue={handleOnclickContinue}/>
                    : <Mapsvg/>
            }
                
        </>
    );
}

export default Game;
