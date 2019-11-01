import React, { Component } from "react";
import Header from "../Header/header";
import LandingPage from "../LandingPage/landingPage";
import Footer from "../Footer/footer";
import "../../App.css";

class AppContainer extends Component {
    state = {
        pageChoice: ""
    };

    changePage = (newPage) => {
        if(newPage !== "" && newPage !== this.state.pageChoice)
            this.setState({
                pageChoice: newPage
            });
    };

    render() {
        return(
            <div className="App">
                <div className="container-fluid container-fluid-top">
                    <div className="row">
                        <div className="col-lg-12">
                            <Header changePage={this.changePage}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <LandingPage pageName={this.state.pageChoice}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-fluid-bottom">
                    <div className="row">
                        <div className="col-lg-12">
                            <Footer changePage={this.changePage}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;