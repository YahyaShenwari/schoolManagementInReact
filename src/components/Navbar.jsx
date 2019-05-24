import React, { Component } from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-inverse  ">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="">
            <img className="image" src="/logo.jpg" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
