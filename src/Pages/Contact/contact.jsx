import React from "react";
import "./contact.scss";

const Contact = () => {

    return(
        <div className="contact-container">
            <div className="container">
                <div className="card card-body-styling card-title">
                    <div className="card-title card-title-styling form-text-styling"><h1>Enter your contact information:</h1></div>
                    <div className="card-body card-body-styling">
                        <form>
                            <div className="form-group">
                                <label className="form-text-styling">Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label className="form-text-styling">Email</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                       placeholder="Email"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;