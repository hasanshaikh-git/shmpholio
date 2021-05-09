import React from "react";
import { Fade } from "react-reveal";
import "./Greetings.css";
import landingPerson from "../assets/lottie/landingPerson.json";
import DisplayLottie from "./DisplayLottie";
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
                {
                  "A passionate Full Stack Web Developer 🚀 having experience of building Web applications with JavaScript / Reactjs / Nodejs / MongoDB and some other cool libraries and frameworks."
                }
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
