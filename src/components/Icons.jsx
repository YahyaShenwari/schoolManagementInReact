import React, { Component } from "react";
import { Link } from "react-router-dom";
const Icons = props => {
  return (
    <div className=" navbar" id="myNavbar">
      <ul className="nav navbar-nav list">
        <li id="brown" className="list">
          <a href="#">Home</a>
        </li>
        <li className="list">
          <a href="#">About Us</a>
        </li>
        <li className="list">
          <Link to="/admission">Addmission</Link>
        </li>
        <li className="list">
          <a href="#">Gallery</a>
        </li>
        <li className="list">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="list">
          <a href="#">
            <span className="glyphicon glyphicon-envelope" /> Feedback
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
