import React from "react";
import "./Education.css";
import { Fade } from "react-reveal";
import { Timeline } from "antd";
import bamu from "../assets/images/university.png";
import saint from "../assets/images/school1.jpg";
import sk from "../assets/images/school2.png";

export default function Education() {
  return (
    <div id="education">
      <Fade bottom duration={1000} distance="20px">
        <div className="education-container">
          <div>
            <h1 className="education-heading">Education📚</h1>
            <div className="education-cards-div">
              <Timeline mode={"alternate"}>
                <Timeline.Item label="2014 - 2018">
                  <div className="container">
                    <div className="content">
                      <img
                        src={bamu}
                        alt={"school_logo"}
                        className={"education-roundedimg"}
                      />
                      <h2>Dr Babasaheb Ambedkar Marathwada University</h2>
                      <h3>BE in Computer Science Engineering</h3>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item label="2012 - 2014">
                  <div className="container">
                    <div className="content">
                      <img
                        src={sk}
                        alt={"school_logo"}
                        className={"education-roundedimg"}
                      />
                      <h2>S.K Somaiya Vinaymandir</h2>
                      <h3>HSC(Science)</h3>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item label="2010">
                  <div className="container">
                    <div className="content">
                      <img
                        src={saint}
                        alt={"school_logo"}
                        className={"education-roundedimg"}
                      />
                      <h2>st. Joseph's High School</h2>
                      <h3>SSC</h3>
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
