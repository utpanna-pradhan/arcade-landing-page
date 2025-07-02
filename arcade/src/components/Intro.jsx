import React from "react";
import subhead from "../assets/images/6318b77f91492b0622e618e5_careers-hero-sub-text_min.svg";
import intro1 from "../assets/images/intro1.webp";
import intro2 from "../assets/images/intro2.webp";
import intro3 from "../assets/images/intro3.webp";
import intro4 from "../assets/images/intro4.webp";
import intro5 from "../assets/images/intro5.webp";
import "../Stylesheets/Intro.css";

function Intro() {
  return (
    <div>
      <div className="container-fluid intro_container ">
        <div className="left ">
          <div className="heading">
            <h1 className="intro_head heading-600 ">Join our fast <br></br>growing team</h1>
          </div>

          <div className="subheading">
            <img src={subhead} alt="" />
          </div>
          <div className="see_pos_btn ">
            <button className="see_btn font-semibold">See Open Position</button>
          </div>
        </div>
        <div className="right ">
        <div className="img_left">
            <div className="img_left_row1 flex">
                <img src={intro1} alt="" width={200}/>
                <img src={intro2} alt="" width={200}  />
            </div>
            <div className="img_left_row2">
                <img src={intro4} alt=""  width={200}/>
            </div>
        </div>
        <div className="img_right">
            <div className="right_img_row1">
                <img src={intro3} alt="" width={200}/>
            </div>
            <div className="right_img_row2">
                 <img src={intro5} alt="" width={200}/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
