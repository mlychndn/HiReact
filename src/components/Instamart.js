import { useState } from "react";
import UP from "./up.png";
import DOWN from "./down.png";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setNotVisible,
}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="relative m-4 p-3 w-full  border-4 border-slate-700">
        {!isVisible ? (
          <div className="absolute top-0 right-0">
            <button
              onClick={() => {
                setIsVisible();
              }}
            >
              <img src={UP} alt="" className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="absolute right-0 top-0">
            <button onClick={() => setNotVisible()}>
              <img src={DOWN} alt="" className="w-5 h-5" />
            </button>
          </div>
        )}
        <h1 className="text-xl text-red-600 font-bold">{title}</h1>
        {isVisible ? <p>{description}</p> : ""}
      </div>
    </>
  );
};

const Instamart = () => {
  const [makeVisible, setMakeVisible] = useState("tithi");
  return (
    <div className="m-24">
      <Section
        key="tithi"
        title="Tithi"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Senectus et netus et malesuada fames. Integer eget aliquet nibh praesent tristique. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet porttitor eget dolor morbi. Purus sit amet luctus venenatis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare"
        }
        isVisible={makeVisible === "tithi"}
        setIsVisible={() => {
          setMakeVisible("tithi");
        }}
        setNotVisible={() => {
          setMakeVisible("");
        }}
      />
      <Section
        key="malay"
        title="Malay"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Senectus et netus et malesuada fames. Integer eget aliquet nibh praesent tristique. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet porttitor eget dolor morbi. Purus sit amet luctus venenatis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare"
        }
        isVisible={makeVisible === "malay"}
        setIsVisible={() => {
          setMakeVisible("malay");
        }}
        setNotVisible={() => {
          setMakeVisible("");
        }}
      />
      <Section
        key="rewati"
        title="Rewati"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Senectus et netus et malesuada fames. Integer eget aliquet nibh praesent tristique. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet porttitor eget dolor morbi. Purus sit amet luctus venenatis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare"
        }
        isVisible={makeVisible === "rewati"}
        setIsVisible={() => {
          setMakeVisible("rewati");
        }}
        setNotVisible={() => {
          setMakeVisible("");
        }}
      />
      <Section
        key="abhinav"
        title="Abhinav"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Senectus et netus et malesuada fames. Integer eget aliquet nibh praesent tristique. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet porttitor eget dolor morbi. Purus sit amet luctus venenatis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare"
        }
        isVisible={makeVisible === "abhinav"}
        setIsVisible={() => {
          setMakeVisible("abhinav");
        }}
        setNotVisible={() => {
          setMakeVisible("");
        }}
      />
    </div>
  );
};

export default Instamart;
