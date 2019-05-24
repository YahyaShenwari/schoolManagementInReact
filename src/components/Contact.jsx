import React, { Component } from "react";
import address from "../address.PNG";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div contact_container>
        <div className="row">
          <div className="contact-us col-sm-5">
            <center>
              <ul className="list">
                <li>
                  <p>You can reach Us on given Address</p>
                </li>
                <li>
                  <p>Dawood Public School</p>
                </li>
                <li>
                  <p> Plot # ST-1</p>
                </li>
                <li>
                  <p>Dawood Cooperative Housing Society</p>
                </li>
                <li>
                  <p>Bahadurabad, Karachi</p>
                </li>
                <br />
                <li>
                  <p>
                    Contact No : +9221-3840-3588, 3840-3589, 3840-3591,
                    3840-3592
                  </p>
                </li>
                <li>
                  <p>3840-3593, 3840-3590 and 3493-4942</p>
                </li>

                <li>
                  <p>Pakistan</p>
                </li>
              </ul>
            </center>
          </div>
          <div className="col-sm-3">
            <img src={address} alt="" />
          </div>
        </div>

        <div className="contact_form">
          <div className="row " id="feedback">
            <div className="col-sm-1" />
            <div className="col-sm-6">Feedback form</div>
          </div>
          <form>
            <div class="row">
              <div className="col-sm-1" />
              <div className="col-sm-3">
                <input type="text" placeholder="Name" id="inp" />
                <input type="text" placeholder="Email" id="inp" />
                <input type="number" placeholder="Phone" id="inp" />
                <p>
                  <input type="checkbox" />I am not a rebort
                </p>
                <button type="submit" id="submit">
                  Submit
                </button>
              </div>
              <div className="col-sm-4">
                <textarea placeholder="Message..." />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
