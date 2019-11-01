import React, { Component } from 'react';
import "./projects.scss";

class Projects extends Component {

    state = {
        projectToDisplay: 1
    };

    handleNextClick = () => {
        if(this.state.projectToDisplay === 1) {
            this.setState({
                projectToDisplay: 0
            });
        }
        if(this.state.projectToDisplay === 0) {
            this.setState({
                projectToDisplay: 1
            });
        }
    };

    render() {
        return (
            <div className="container text-alignment">
                <h1 className="header-font">My Projects</h1>
                <div className="card">
                    <div className="card-title title-styling">
                        <div className="title-styling">
                            {this.state.projectToDisplay === 1 && (
                                <div>
                                    <h3 className="title-text-styling">From The Fun:</h3>
                                    <h4 className="title-text-styling"> GoalTracker - An app to track various fitness and lifestyle goals</h4>
                                </div>
                            )}
                            {this.state.projectToDisplay === 0 && (
                                <div>
                                    <h3 className="title-text-styling">To the necessary</h3>
                                    <h4 className="title-text-styling"> Various school projects in various languages</h4>
                                </div>
                            )}
                        </div>
                        <div className="btn-group" role="group" aria-label="...">
                            <button type="button" className="btn btn-default" onClick={() => this.handleNextClick()}>Next</button>
                        </div>
                    </div>
                    {this.state.projectToDisplay === 1 && (<img src="https://www.halhigdon.com/wp-content/uploads/2018/04/runner.png" alt="firstProject"/>)}
                    {this.state.projectToDisplay === 0 && (<img src="https://www.thoughtco.com/thmb/G9vU9zzR6Gffq9rpvJVeZ2YfO28=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/warning--data-transfer-in-progress-507065943-59c6d2a70d327a001141794d-5bb792f246e0fb0051a88f9c.jpg" alt="firstProject"/>)}
                </div>
            </div>
        )
    }
}

export default Projects;