import { useEffect, useState } from "react";

const Info = (props) => {
  const [count, setCount] = useState("0");
  const [count2, setCount2] = useState(2);
  const [url, setUrl] = useState("");

  const getDogData = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await data.json();

    setUrl(json.message);
  };

  useEffect(() => {
    getDogData();
  }, [count]);

  return (
    <>
      <h1>This is info component by {props.name} </h1>
      <p>{count}</p>
      <p>{count2}</p>
      {!url ? <p>wait...</p> : <img src={url} alt="dog-image" />}
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
