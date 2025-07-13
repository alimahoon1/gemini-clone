import React from 'react';
import './main.css'
import {assets} from '../../assets/assets'

const Main = () => {
    return (
        <div className="main">
            <div className="nav"> 
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hell, User.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest a roadmap to learn ai/ml</p>
                        <img src={assets} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
