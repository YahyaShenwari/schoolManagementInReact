import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="row">
          {" "}
          <div className=" col-sm-12 backg">
            <img
              className="back"
              src="https://c.tribune.com.pk/2018/01/1597618-sargodhauniversityy-1514786020-180-640x480.jpg"
            />
          </div>
        </div>
        <div className="well" style={{ marginBottom: "50px" }}>
          <h3>Latest News</h3>
          <p>DPS SUMMER SCHOOL 2019 FUN FOR EVERYONE! (FOR CLASS VI TO IX)</p>
          <p>DPS SUMMER SCHOOL 2019 FUN FOR EVERYONE! (FOR CLASS II TO V)</p>
          <p>
            DPS SUMMER SCHOOL 2019 FUN FOR EVERYONE! (FOR PRE-NURSERY TO CLASS
            I)
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            nostrum at eaque in delectus deserunt nam non, dignissimos maiores
            explicabo sed illum facilis adipisci eveniet quos, facere, ea
            officiis voluptates?
          </p>
        </div>
        <div className="welcome">
          <h1>WelCome To Dawood Public School</h1>
          <div className="col-sm-5">
            <p>
              To develop an educational institution that produces young women
              who possess the capabilities of critical thinking, analysis and
              awareness of disparate environments. They will be instilled with
              knowledge and acumen to enable them to become proactive members of
              their culture and society, as well as to equip them with the
              practical tools necessary for their survival and autonomy. The
              Clubs and Societies venture at DPS provides leadership opportunity
              year after year. Showing steady growth, 2018-19 has offered a
              variety of 19 clubs and/or societies for aspiring students. Run
              completely by students, each Club or Society has five Senior
              Council members from Grade XI and a supporting Junior Council from
              Grade X. The latter group assists as an understudy under the
              collective guidance of a Club Mentor. They are assessed and
              trained by their senior counterparts for a deserved transfer of
              responsibility for the next session.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
