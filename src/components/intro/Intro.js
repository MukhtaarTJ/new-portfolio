import React from "react";
import SkillSets from "./SkillSets";
import Hero from "../../Assets/hero.png";
import MyAvatar from "../../Assets/myAvatar.png";

const Intro = () => {
  return (
    <div className="hero" id="home">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className="hero-content">
              <div className="hero-text">
                <p>I'm</p>
                <h1>Tijani Mukhtaar</h1>
                <h2>
                  <SkillSets />
                </h2>
                <div className="typed-text">
                  Web Developer, Software Developer
                </div>
              </div>
              <div className="hero-btn">
                <a
                  className="btn"
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop4">
                  Hire Me
                </a>
                <a
                  className="btn"
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop4">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-none d-md-block">
            <div className="hero-image">
              <img src={MyAvatar} alt="Hero" style={{ width: "400px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
