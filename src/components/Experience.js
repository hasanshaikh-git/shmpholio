import React from "react";
import "./Experience.css";
import {Fade} from "react-reveal";
import { Timeline} from "antd";
import crioLogo from "../assets/images/crio.png";
import tcsLogo from "../assets/images/tcs.jpg";



export default function Experience() {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container">
            <div>
              <h1 className="experience-heading">Experience</h1>
              <div className="experience-cards-div">
              <Timeline mode={"alternate"}>
              <Timeline.Item label="December 2018 – Present">
        <div className="container">
    <div className="content">
    <img src={tcsLogo} alt={"company_logo"} className={"experience-roundedimg"}/>
      <h2>Tata Consultancy Services</h2>
      <h3>System Engineer(Full-time)</h3>
<p>2+ years of experience working in frontend technologies</p> 
   </div>
  </div>
        </Timeline.Item>
        <Timeline.Item label="January 2021 – Present">
            <div className="container">
    <div className="content">
    <img src={crioLogo} alt={"company_logo"} className={"experience-roundedimg"}/>
      <h2>CRIO.Do</h2>
      <h3>Full Stack Web Developer(Part-time)</h3>
<p>Ramped up as a Full-Stack Web Developer by building real world products.</p> 
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

