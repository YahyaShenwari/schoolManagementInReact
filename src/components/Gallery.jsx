import React, { Component } from "react";
import first from "../first.jpg";
import scond from "../scond.jpg";
import third from "../third.jpg";
class Gallery extends Component {
  state = {};
  render() {
    return (
      <div className="gallery">
        <img src={first} alt="" />
        <img src={scond} alt="" />
        <img src={third} alt="" />
      </div>
    );
  }
}

export default Gallery;
