import { Card, Image } from "antd";
import React from "react";
import "./Projects.css";
import { Fade } from "react-reveal";
import companyLogo from "../assets/images/crio.svg";

const { Meta } = Card;
const projects = [
  {
    image: require("../assets/images/portfolio.png"),
    projectName: "Shmfolio",
    projectDesc: "A react.js developer portfolio",
    footerLink: [
      {
        name: "View Project",
        url: "http://hasan-shaikh.com/",
      },
      {
        name: "View Code",
        url: "https://github.com/smartyhasan/shmpholio",
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
        url: "https://xflix.netlify.app/",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/",
      },
      //  you can add extra buttons here.
    ],
  },
  {
    image: require("../assets/images/QKart.png"),
    projectName: "QKart",
    projectDesc: "A MERN stack E-commerce Application",
    footerLink: [
      {
        name: "View Project",
        url: "https://qkart-project.netlify.app/",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/",
      },
      //  you can add extra buttons here.
    ],
  },
  {
    image: require("../assets/images/Crio-News-Feed.png"),
    projectName: "XBOARD",
    projectDesc: "A Dynamic News Feed Website",
    footerLink: [
      {
        name: "View Project",
        url: "https://crio-news-feed.netlify.app/",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/",
      },
    ],
  },
  {
    image: require("../assets/images/QTrip-static.png"),
    projectName: "QTrip Dynamic",
    projectDesc: "An activity-planning website for travellers",
    footerLink: [
      {
        name: "View Project",
        url: "https://qtrip-dynamic.netlify.app/",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/",
      },
    ],
  },
  {
    image: require("../assets/images/QTrip-static.png"),
    projectName: "QTrip Static",
    projectDesc: "A static travel website",
    footerLink: [
      {
        name: "View Project",
        url: "https://q-trip.netlify.app/",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/shasan419/",
      },
    ],
  },
];

export default function Projects() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{"Key Projects🚀"}</h1>
          <p className={"subTitle project-subtitle"}>
            {"Some of the projects, I worked on"}
          </p>
          <div className="projects-container">
            {projects.map((p, key) => {
              return (
                <Card
                  hoverable
                  style={{ width: "auto" }}
                  cover={<Image width={'auto'} src={p.image.default} alt={"project_image"} />}
                  key={key}
                  actions={[
                    <img
                      src={companyLogo}
                      className={"image-link"}
                      alt={p.footerLink[1].name}
                      title={p.footerLink[1].name}
                      onClick={() =>
                        openProjectInNewWindow(p.footerLink[1].url)
                      }
                    />,
                    <i
                      className={"fas fa-share-square fas-link"}
                      title={p.footerLink[0].name}
                      onClick={() =>
                        openProjectInNewWindow(p.footerLink[0].url)
                      }
                    ></i>,
                  ]}
                >
                  <Meta title={p.projectName} description={p.projectDesc} />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
