import React from "react";
import "./Skills.css";
import SoftwareSkills from "./SoftwareSkills";
import { Fade } from "react-reveal";
import DisplayLottie from "./DisplayLottie";
import vueJS from "../assets/lottie/vueJS.json";

export default function Skills() {
  // const skills = [
  //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
  //   "⚡ Creating application backend using Node and Express",
  // ];
  return (
    <div className={"main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="skills-image-div">
          <DisplayLottie animationData={vueJS} />
            {/* <img alt="work I do" src={what}></img> */}
          </div>
        </Fade>
        <Fade bottom duration={1000}>
          <div className="skills-text-div">
            <h1 className={"skills-heading"}>{"Technical Skills💻"} </h1>
            <p className={"subTitle skills-text-subtitle"}>
              {
                "FULL STACK DEVELOPER"
              }
            </p>
            <SoftwareSkills />
            <div>
              {
              <p className={"subTitle skills-text"}>Having a strong background in creating scalable applications and expertise in both front-end and back-end technologies, I am adept at providing innovative solutions that improve user experience and contribute to business growth.</p>
              }
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
