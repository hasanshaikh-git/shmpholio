import React from "react";
import "./Skills.css";
import SoftwareSkills from "./SoftwareSkills";
import {Fade} from "react-reveal";
import codingPerson from "../assets/lottie/codingPerson.json";
import DisplayLottie from "./DisplayLottie";

export default function Skills() {
    const skills= [
        // emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        // ),emoji(
        //   "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
        // ),emoji(
          "⚡ Creating application backend using Node and Express"
        // )
      ];
  return (
    <div className={"main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {/* {illustration.animated ? ( */}
              <DisplayLottie animationData={codingPerson} />
            {/* ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )} */}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={"skills-heading"}
            >
              {"What I do💻"}{" "}
            </h1>
            <p
              className={
                "subTitle skills-text-subtitle"
              }
            >
              {"ASPIRING FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK"}
            </p>
            <SoftwareSkills />
            <div>
              {skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
