import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Greetings from "./Greetings";
import Skills from "./Skills";
import { BackTop } from "antd";
import "./Home.css";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification"
import { Spin, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CoffeeOutlined,
  EditOutlined,
  PieChartOutlined,
  FileOutlined,
  HomeOutlined,
  CodeOutlined,
  HeartTwoTone,
  GoogleOutlined,
  GithubOutlined,
  LinkedinOutlined,
  GitlabOutlined,
  LinkOutlined,
  LoadingOutlined,
  SafetyCertificateOutlined
} from "@ant-design/icons";
const { Header, Sider, Footer, Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      loading: true,
    };
    this.openProjectInNewWindow.bind(this);
  }

  openProjectInNewWindow = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleScroll(id) {
    window.location.href = "#" + id;
  }
  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />}
        size={"large"}
        spinning={this.state.loading}
        delay={500}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{
              height: "100vh",
              position: "sticky",
              top: 0,
            }}
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={["Home"]}>
              <Menu.Item key="Home" icon={<HomeOutlined />} onClick={null}>
                Home
              </Menu.Item>
              <Menu.Item
                key="#skills"
                icon={<CoffeeOutlined />}
                onClick={this.handleScroll.bind(this, "skills")}
              >
                Skills
              </Menu.Item>
              <Menu.Item
                key="Projects"
                icon={<CodeOutlined />}
                onClick={this.handleScroll.bind(this, "projects")}
              >
                Projects
              </Menu.Item>
              <Menu.Item
                key="Certifications"
                icon={<SafetyCertificateOutlined />}
                onClick={this.handleScroll.bind(this, "certifications")}
              >
                Certifications
              </Menu.Item>
              <Menu.Item
                key="Work Experience"
                icon={<PieChartOutlined />}
                onClick={this.handleScroll.bind(this, "experience")}
              >
                Work Experience
              </Menu.Item>
              <Menu.Item
                key="Education"
                icon={<EditOutlined />}
                onClick={this.handleScroll.bind(this, "education")}
              >
                Education
              </Menu.Item>
              <Menu.Item
                key="CRIO Verified Profile"
                icon={<LinkOutlined />}
                onClick={() =>
                  this.openProjectInNewWindow(
                    "https://www.crio.do/portfolio/shasan419"
                  )
                }
              >
                CRIO Verified Profile
              </Menu.Item>
              <Menu.Item
                key="Resume"
                icon={<FileOutlined />}
                onClick={() =>
                  this.openProjectInNewWindow(
                    "https://drive.google.com/file/d/1InmE-t8V4WPSbElkDVNVMvawILJOuBsf/view"
                  )
                }
              >
                Resume
              </Menu.Item>
              <Menu.Item
                key="Linkedin"
                icon={<LinkedinOutlined />}
                onClick={() =>
                  this.openProjectInNewWindow(
                    "https://www.linkedin.com/in/hasanshaikh/"
                  )
                }
              >
                Linkedin
              </Menu.Item>
              <Menu.Item
                key="shasan419@gmail.com"
                icon={<GoogleOutlined />}
                onClick={() =>
                  this.openProjectInNewWindow("mailto:shasan419@gmail.com")
                }
              >
                shasan419@gmail.com
              </Menu.Item>
              <Menu.Item
                key="Github"
                icon={<GithubOutlined />}
                onClick={() =>
                  this.openProjectInNewWindow("https://github.com/smartyhasan")
                }
              >
                Github
              </Menu.Item>
              <Menu.Item
                key="GitLab"
                icon={<GitlabOutlined />}
                onClick={() =>
                  this.openProjectInNewWindow(
                    "https://gitlab.crio.do/shasan419"
                  )
                }
              >
                GitLab
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ minHeight: "100vh" }}>
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
                position: "sticky",
                top: 0,
                backgroundColor: "#EEF8F4",
                zIndex: 1,
              }}
            >
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                  id: "toggleId",
                }
              )}
              <a href="/" className="logo">
                <span className="grey-color"> &lt;</span>
                <span className="logo-name">Hasan Shaikh</span>
                <span className="grey-color">/&gt;</span>
              </a>
            </Header>
            <Content
              className="site-layout-background"
              style={{ minHeight: "100vh" }}
            >
              <Greetings />
              <Skills />
              <Projects />
              <Certification />
              <Experience />
              <Education />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <span>
                <i className="fas fa-code"></i> with{" "}
                <HeartTwoTone twoToneColor="red" /> by
              </span>
              <a href="/">
                <span className="logo-name">Hasan Shaikh</span>
              </a>
            </Footer>
            <BackTop>
              <div
                title="Go to top"
                style={{
                  borderRadius: 4,
                  backgroundColor: "#FE3D0C",
                  color: "#fff",
                  textAlign: "center",
                  height: 40,
                  width: 40,
                  bottom: "20px",
                  right: "30px",
                  lineHeight: "40px",
                  fontSize: "24px",
                }}
              >
                <i className="fas fa-hand-point-up"></i>
              </div>
            </BackTop>
          </Layout>
        </Layout>
      </Spin>
    );
  }
}

export default withRouter(Home);
