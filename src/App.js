import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Index from "./Components/index";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter>

      /* <Route path='/' exact component={Index} />
      <Route path='/contact' component={Contact} /> */
    );
  }
}

export default App;
