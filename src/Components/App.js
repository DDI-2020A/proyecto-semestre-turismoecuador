import React from 'react';
import '../Styles/App.css';
import Footer from '../Components/Footer';
import CardInformation from '../Components/CardInformation';
import FontSlider from '../Components/FontSlider';
import Item from "../Components/Item";

function App() {

    return (
        <>
            <FontSlider/>
            <CardInformation />
            <Footer/>

        </>
    );
}

export default App;
