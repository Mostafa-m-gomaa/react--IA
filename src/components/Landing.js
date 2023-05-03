import React from "react";
import "../components/css/landing.css";
import landingImage from "../components/images/landing-image.png";

function Slider() {
  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcom , To Jobaya </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              molestias
            </p>
          </div>
          <div className="img">
            <img src={landingImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
