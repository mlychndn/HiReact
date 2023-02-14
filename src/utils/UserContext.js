import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    mail: "dummy@gmail.com",
  },
});

export default UserContext;
