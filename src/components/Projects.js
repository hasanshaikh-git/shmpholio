import { Card, Image } from "antd";
import React from "react";
import "./Projects.css";
import { Fade } from "react-reveal";
import crio from "../assets/images/crio.svg";
import git from "../assets/images/github.svg";
import link from "../assets/images/link.svg";

const { Meta } = Card;
const projects = [
  {
    image: require("../assets/images/QKart.png"),
    projectName: "QKart",
    projectDesc: "A MERN stack E-commerce Application",
    footerLink: [
      {
        name: "View Project",
        url: "https://qkart-mern.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/shasan419/qkart-frontend",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/ME_QKART_FRONTEND/",
      },
      //  you can add extra buttons here.
    ],
  },
  {
    image: require("../assets/images/xflix.png"),
    projectName: "XFlix",
    projectDesc: "A MERN stack video sharing platform",
    footerLink: [
      {
        name: "View Project",
        url: "https://xflix-mern.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/shasan419/xflix-frontend",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/ME_BUILDOUT_XFLIX_REACT/",
      },
      //  you can add extra buttons here.
    ],
  },
  {
    image: require("../assets/images/QTrip-static.png"),
    projectName: "QTrip Dynamic",
    projectDesc: "An activity-planning website for travellers",
    footerLink: [
      {
        name: "View Project",
        url: "https://q-trip-dynamic.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/shasan419/qtrip-dynamic",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/ME_QTRIPDYNAMIC/",
      },
    ],
  },
  {
    image: require("../assets/images/countries.png"),
    projectName: "REST Countries API with color theme switcher",
    projectDesc: "Frontend Mentor Challenge Solution",
    footerLink: [
      {
        name: "View Project",
        url: "https://countries-p.netlify.app/",
      },
      {
        name: "View Code",
        url:
          "https://github.com/shasan419/REST-Countries-API-with-color-theme-switcher",
      },
    ],
  },
  {
    image: require("../assets/images/crowfund.png"),
    projectName: "Crowdfunding product page",
    projectDesc: "Frontend Mentor Challenge Solution",
    footerLink: [
      {
        name: "View Project",
        url: "https://crowdfund-challenge.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/shasan419/crowdfund",
      },
    ],
  },
  {
    image: require("../assets/images/portfolio.png"),
    projectName: "Shmfolio",
    projectDesc: "A react.js developer portfolio",
    footerLink: [
      {
        name: "View Project",
        url: "https://hasan-shaikh.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/shasan419/shmpholio",
      },
      //  you can add extra buttons here.
    ],
  },
  // {
  //   image: require("../assets/images/Crio-News-Feed.png"),
  //   projectName: "XBOARD",
  //   projectDesc: "A Dynamic News Feed Website",
  //   footerLink: [
  //     {
  //       name: "View Project",
  //       url: "https://crio-news-feed.netlify.app/",
  //     },
  //     {
  //       name: "View Implementation",
  //       url: "https://www.crio.do/portfolio/shasan419/ME_BUILDOUT_XBOARD/",
  //     },
  //   ],
  // },
  // {
  //   image: require("../assets/images/QTrip-static.png"),
  //   projectName: "QTrip Static",
  //   projectDesc: "A static travel website",
  //   footerLink: [
  //     {
  //       name: "View Project",
  //       url: "https://q-trip.netlify.app/",
  //     },
  //     {
  //       name: "View Implementation",
  //       url: "https://www.crio.do/portfolio/shasan419/ME_QTRIPSTATIC/",
  //     },
  //   ],
  // },
];

export default function Projects() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  function getLogoFromType(name){
    if(name === "View Project") return link
    else if(name === "View Code") return git
    else return crio
  }
  function getActions(p){
    let arrayToReturn = [];
    p.footerLink.forEach(x=>{
        arrayToReturn.push(<img
          src={getLogoFromType(x.name)}
          className={"image-link"}
          alt={x.name}
          title={x.name}
          onClick={() =>
            openProjectInNewWindow(x.url)
          }
          />)
    });
    return arrayToReturn
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{"Projects🚀"}</h1>
        <p className={"subTitle project-subtitle"}>
          {"Some of the projects, I worked on"}
        </p>
        <div className="projects-container">
          {projects.map((p, key) => {
            return (
              <Fade bottom duration={1000} distance="20px">
                <Card
                  hoverable
                  style={{ width: "auto" }}
                  cover={
                    <Image
                      width={"auto"}
                      src={p.image.default}
                      alt={"project_image"}
                    />
                  }
                  key={key}
                  actions={getActions(p)}
                >
                  <Meta title={p.projectName} description={p.projectDesc} />
                </Card>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
