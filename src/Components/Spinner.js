import React from "react";
import '../Styles/Spinner.scss';

const Spinner = () => {

    return (
        <>
            <div className='container'>
                <div className='spinner-container'>
                    <div className="spinner-path">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Spinner;