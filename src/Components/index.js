import React, { Component } from "react";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Protfolio from "./Protfolio/Protfolio";
import SocailMedia from "./SocailMedia/SocailMedia";
import Work from "./Work/Work";



class Index extends Component {
    render() {
        return (
            <div className="App">
                <Home />
                <Work />
                <Protfolio />
                <Profile />
                <About />
                <SocailMedia />
                <Footer />
            </div>
        );
    }
}

export default Index;
