import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
import Sidebar from "./components/Sidebar";
import Admission from "./components/Admission";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Contact from "./components/Contact";
import TopNavigation from "./components/TopNavigation";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <TopNavigation />
          <div className="row">
            <div style={{ marginBottom: "30px" }}>
              <Route path="/" exact component={Home} />
              <Route path="/admission" component={Admission} />
              <Route path="/contact" component={Contact} />
              <Route path="/Gallery" component={Gallery} />
              <Route exact path="/Gallery" component={Gallery} />
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
