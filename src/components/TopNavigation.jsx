import React, { Component } from "react";
//import top from "../top.jpg"; if i want to import pic from source
import { BrowserRouter, Link, Route } from "react-router-dom";

class TopNavigation extends Component {
  state = {};
  render() {
    return (
      <div className="navigation">
        <div className="row nav">
          <div className="col-sm-2">
            <a className="navbar-brand" href="">
              <img className="logo" src="logo.jpg" alt="logo.jpg" />
            </a>
          </div>
          <div className="col-sm-10">
            <nav>
              <ul>
                <li className="list">
                  <Link to="/">Home</Link>
                </li>
                <li className="list">
                  <Link to="/admission">Admission</Link>
                </li>

                <li className="list">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="list">
                  <Link to="/Gallery">Gallery</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNavigation;
