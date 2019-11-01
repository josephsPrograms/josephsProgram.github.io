import React from 'react';
import Home from "../../Pages/Home/home";
import Projects from "../../Pages/Projects/projects";
import AboutMe from "../../Pages/AboutMe/aboutMe";
import Contact from "../../Pages/Contact/contact";
import "./landingPage.scss";

const LandingPage = (props) => {

    if (props.pageName === "projects") {
        return <Projects/>;
    }
    else if (props.pageName === "aboutme")
        return <AboutMe/>;
    else if (props.pageName === "contact")
        return <Contact/>;
    else
        return <Home/>
};

export default LandingPage;