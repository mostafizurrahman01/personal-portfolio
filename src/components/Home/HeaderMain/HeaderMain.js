import React from 'react';
import AnimatedParicle from '../AnimatedParticle/AnimatedParticle';
import './HeadeMain.css';
import Typed from 'react-typed';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faDownload} from "@fortawesome/free-solid-svg-icons";


const HeaderMain = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <AnimatedParicle></AnimatedParicle>
                <h1>Welcome To my Portfolio</h1>
                <Typed
                    className="typed-text"
                    strings={["Web developer", "React developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="https://drive.google.com/file/d/1oM2_eaqrBY2HdiIhDOr6Cv4NZuceBqy-/view?usp=sharing" className="btn-main" >
                    <FontAwesomeIcon icon={faDownload} />
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default HeaderMain;