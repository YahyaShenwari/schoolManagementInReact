import React, { Component } from "react";
import first from "../first.jpg";
import scond from "../scond.jpg";
import third from "../third.jpg";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="foo">
        <div>
          <img src={first} alt="" />
          <img src={scond} alt="" />
          <img src={scond} alt="" />
          <img src={first} alt="" />
          <img src={scond} alt="" />
          <img src={third} alt="" />
        </div>
        <div id="footer_blue">
          <p>
            Dawood Public School is a not-for-profit institution managed by
            HHMS, a charitable society registered under Societies Act 1860.
            Copyright © Dawood Public School
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
