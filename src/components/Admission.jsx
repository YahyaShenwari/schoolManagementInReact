import React, { Component } from "react";

class Admission extends Component {
  state = {};
  render() {
    return (
      <div className="admission-page">
        <div className="form">
          <div className="row">
            <div className="col-sm-2">
              <label>F_Name</label>
            </div>
            <div className="col-sm-3">
              <input type="text" name="fName" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label>L_Name</label>
            </div>
            <div className="col-sm-3 ">
              <input type="text" name="fName" />
            </div>
            <div className="col-sm-2 " />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label>CNIC</label>
            </div>
            <div className="col-sm-3">
              <input type="text" name="fName" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label>Gender</label>
            </div>
            <div className="col-sm-3">
              <select className="selectGender">
                <option>Option</option>
                <option>Male</option>
                <option>FMale</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label>Department</label>
            </div>
            <div className="col-sm-3">
              <select className="selectGender">
                <option>Selection</option>
                <option>CS</option>
                <option>EE</option>
                <option>BBA</option>
                <option>BSM</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <input
                className="button"
                type="submit"
                value="Submit"
                class="button"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admission;
