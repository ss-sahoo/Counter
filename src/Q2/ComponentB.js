import React from "react";

const ComponentB = ({ cendol, onCendolUpdate }) => {
  const handleClick = () => {
    const updatedCendol = cendol + 10;
    onCendolUpdate(updatedCendol);
  };

  return (
    <div>
      <p>{cendol}</p>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Increment by 10
      </button>
    </div>
  );
};

export default ComponentB;
