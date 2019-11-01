import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {

    return(
        <div className="about-me-container">
            <div className="container">
                <div className="card card-body-styling">
                    <div className="card-title card-title-styling"><h1>Hobbies:</h1></div>
                    <div className="card-body card-body-styling">
                        <h3 className="card-body-text">Music</h3>
                        <h3 className="card-body-text">Hiking</h3>
                        <h3 className="card-body-text">Programming</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;