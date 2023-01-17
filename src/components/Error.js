import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oops</h1>
      <p>Somethimg went wrong</p>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
    </>
  );
};

export default Error;
