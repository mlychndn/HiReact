import { useRouteError } from "react-router-dom";

const { err } = useRouteError;
const Error = () => {
  return (
    <>
      <h1>Oops</h1>
      <p>Somethimg went wrong</p>
      <p>err.status</p>
      <p>err.message</p>
    </>
  );
};

export default Error;
