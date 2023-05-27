import React, { useState } from "react";

const Button = () => {
  const [isTrue, setIsTrue] = useState(true);
  const buttonStyle = {
    backgroundColor: isTrue ? "red" : "blue",
    width: "80px",
    height: "30px",
    cursor: "pointer",
  };
  const handleClick = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        {isTrue ? "True" : "False"}
      </button>
    </div>
  );
};

export default Button;
