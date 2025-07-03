import React from "react";
// import homeimg from "../assets/images/homeintro.webp";
import "../Stylesheets/Home.css";

function Home() {
  return (
    <>
     <div className="home_container">
     
    
    </div>
     <div className="home_container_content">
        <div className="home_button">
          <button className="fw-500">
            Announcing Arcade Desktop App 2.0
            <span>Download</span>
          </button>
        </div>
        <div className="home_content">
          <h1 className="font-roboto fonts-60 fontw-700">Product demos that aren't painful,boring to make.</h1>
        </div>
        <div className="home_Subcontent">
          <p>Create interactive demos that convert -- in minutes</p>
        </div>
        <div className="home_sec_buttons">
          <div className="home_sec_button1">
            <button>Install free extension</button>
          </div>
          <div className="home_sec_button2">
            <button>Talk to sales</button>
          </div>
        </div>
      </div>
    </>
   
  );
}

export default Home;
