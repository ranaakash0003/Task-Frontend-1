import React, { Component } from "react";
import Navbar from "./cpmponents/layout/Navbar";
import Country from "./cpmponents/countries/Country";
import CountryDetails from "./cpmponents/countries/CountryDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./cpmponents/home/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
           
              <Route exact path="/countries" component={Country} />
            
            <Route exact path="/countries/:id" component={CountryDetails} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
