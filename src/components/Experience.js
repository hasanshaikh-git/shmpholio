import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import { Timeline } from "antd";
import briq from "../assets/images/briq.jpeg";
import tcsLogo from "../assets/images/tcs.jpg";

export default function Experience() {
  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container">
          <div>
            <h1 className="experience-heading">Experience🖥️</h1>
            <div className="experience-cards-div">
              <Timeline mode={"alternate"}>
                <Timeline.Item label="September 2021 – Present">
                  <div className="container">
                    <div className="content">
                      <img
                        src={briq}
                        alt={"company_logo"}
                        className={"experience-roundedimg"}
                      />
                      <h2>Briq Data Analytics India</h2>
                      <h3>Software Engineer</h3>
                      <p>
                      1+ years of experience working in frontend technologies
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item label="December 2018 – September 2021">
                  <div className="container">
                    <div className="content">
                      <img
                        src={tcsLogo}
                        alt={"company_logo"}
                        className={"experience-roundedimg"}
                      />
                      <h2>Tata Consultancy Services</h2>
                      <h3>System Engineer</h3>
                      <p>
                        2+ years of experience working in frontend technologies
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
