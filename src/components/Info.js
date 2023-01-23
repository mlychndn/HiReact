import { useState } from "react";

const Info = (props) => {
  const [count, setCount] = useState("0");
  const [count2, setCount2] = useState(2);
  return (
    <>
      <h1>This is info component by {props.name} </h1>
      <p>{count}</p>
      <p>{count2}</p>
      <button
        onClick={() => {
          setCount(+count + 1);
          setCount2(count2 - 1);
        }}
      >
        Set Count
      </button>
    </>
  );
};

export default Info;
