import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className=" bg-orange-500 h-14 mt-auto">
      <h2 className="text-2xl text-white text-center my-3">
        Maintained and developed by {user.name}
      </h2>
    </div>
  );
};

export default Footer;
