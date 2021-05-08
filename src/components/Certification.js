import { Image } from "antd";
import React from "react";
import "./Certification.css";
import { Fade } from "react-reveal";
import certificate from "../assets/images/Crio-certificate.jpg";

export default function Certification() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="certifications">
        <div>
          <h1 className="skills-heading"> Certification✨</h1>
          <div className="projects-container">
            <Image
              //   width={'auto'}
              //   height={'auto'}
              src={certificate}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
