import React from "react";
import { Outlet } from "react-router-dom";
import Info from "./Info";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>This is about page</h1>
        <p>Page is under construction</p>
        <Outlet />
        <Info />
      </div>
    );
  }
}
export default About;
