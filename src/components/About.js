import { Outlet } from "react-router-dom";
import Info from "./Info";
const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <p>Page is under construction</p>
      <div>
        <Info name="Malay" />
        <Outlet />
      </div>
    </div>
  );
};

export default About;
