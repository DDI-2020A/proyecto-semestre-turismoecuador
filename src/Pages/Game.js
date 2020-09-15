import React, {useEffect, useState} from 'react';
import '../Styles/styles.css';

import Mapsvg from '../Components/Mapsvg';
import SelectAvatar from "../Components/SelectAvatar";
//import ModalAnswer from '../Components/ModalAnswer';
//import ModalQuestions from './ModalQuestions';
//import Carousel from '../Components/Carousel';
//import ModalQuestions from '../Components/ModalQuestions';


<<<<<<< HEAD
const Game = () => {
=======
function Game() {

>>>>>>> f0d20fead18b3553e593c79bb5f80846c0f5bcf6
    const [selectAvatar, setSelectAvatar] = useState(false);

    useEffect(() => {
        console.log('Avatar seleccionado', selectAvatar)
    }, [selectAvatar]);

    const handleOnclickContinue = () => {
        setSelectAvatar(true);
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
