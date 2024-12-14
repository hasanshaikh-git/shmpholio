import React from "react";
import { Fade } from "react-reveal";
import "./Greetings.css";
import landingPerson from "../assets/lottie/landingPerson.json";
import DisplayLottie from "./DisplayLottie";
import jSLogo from "../assets/images/javascript.svg";
import { Button } from "antd";

export default function Greeting() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={"greeting-text"}>
                {" "}
                {"Hi! I'm Hasan "} <span className="wave-emoji">{"👋"}</span>
              </h1>
              <p className={"greeting-text-p subTitle"}>
              An experienced Software Developer 🚀 with a strong background in building scalable and efficient Web Applications using
                {" "}<img
                  style={{"width": "40px",
                    "height": "40px"}}
                  title="Javascript"
                  alt="Javascript"
                  src={jSLogo}
                />{", "}
                along with a variety of advanced libraries and frameworks such as VueJS, ReactJS, NodeJS, etc. Proficient in both front-end and back-end development, I have a proven track record of delivering high-quality software solutions that enhance user experience and drive business success. Adept at collaborating with cross-functional teams, I excel in agile environments and am committed to continuous learning and adopting best practices in software development.
              </p>
              <div className="button-greeting-div">
                <Button
                  type="primary"
                  shape="round"
                  style={{ fontFamily: "Mynor-Regular" }}
                  onClick={() =>
                    openProjectInNewWindow(
                      "https://drive.google.com/file/d/1InmE-t8V4WPSbElkDVNVMvawILJOuBsf/view"
                    )
                  }
                >
                  See my Resume
                </Button>
                <a
                  href={"https://www.linkedin.com/in/hasanshaikh/"}
                  className="icon-button linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* {illustration.animated ? ( */}
            <DisplayLottie animationData={landingPerson} />
            {/* ) : ( */}
            {/* <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )} */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
