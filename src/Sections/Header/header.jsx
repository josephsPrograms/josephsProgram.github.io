import React from 'react';
import "./header.scss";

const Header = (props) => {

    return(
        <div className="header-container">
            <div className="container">
                <div className="row justify-content-center">
                    <h1>josephsPrograms (Github)</h1>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <button onClick={() => props.changePage("home")} className="button-background">
                            <h6>Home</h6>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => props.changePage("projects")} className="button-background">
                            <h6>Projects</h6>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => props.changePage("aboutme")} className="button-background">
                            <h6>About Me</h6>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => props.changePage("contact")} className="button-background">
                            <h6>Contact</h6>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;