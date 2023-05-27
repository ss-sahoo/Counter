import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [bgColorCounter, setBgColorCounter] = useState("#fcc200");
  const [buttonColor, setButtonColor] = useState("#2fdfc0");

  const changeCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const changeButtonColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setButtonColor(randomColor);
    setBgColorCounter(randomColor);
  };

  return (
    <div className="counter">
      <div className="counter-content">
        <div
          className="counter--count"
          style={{ backgroundColor: bgColorCounter }}
          onClick={changeCounter}
        >
          <h1>{count.toString().padStart(2, "0")}</h1>
          <p>
            <u>Click to increase counter</u>
          </p>
        </div>
      </div>
      <button
        id="colorButton"
        className="counter--plus"
        style={{ backgroundColor: buttonColor }}
        onClick={changeButtonColor}
      >
        Change Color
      </button>
    </div>
  );
};

export default Counter;
