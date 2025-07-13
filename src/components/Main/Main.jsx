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
                        <img src={assets.ai_icon} alt="ai icon" />
                    </div>

                    <div className="card">
                        <p>Briefly summarise this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="ai icon" />
                    </div>

                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="ai icon" />
                    </div>
                    
                    <div className="card">
                        <p>Improve the reading of the following code</p>
                        <img src={assets.code_icon} alt="ai icon" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;
