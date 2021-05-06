import React from "react";
import "./Header.css";
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default class Header extends React.Component {
  root = () => {
    this.props.history.push("/");
  };


  render() {
    return (
      <div className="header">
        {/* Shows Qkart title image */}
        <div className="header-title" onClick={this.root}>
          {/* <img src="xflixlogo.svg" alt="XFlix-icon"></img> */}
        </div>
        <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />      </div>
    );
  }
}