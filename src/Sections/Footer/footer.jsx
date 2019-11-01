import React from 'react';
import "./footer.scss";

const Footer = (props) => {

    return(

        <div className="footer-container">
            <div className="container">
                <div className="row justify-content-center">
                    <h1>My Portfolio</h1>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <button onClick={() => props.changePage("contact")} className="footer-button">
                            <h6>Contact</h6>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;