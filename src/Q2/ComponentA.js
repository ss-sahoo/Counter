import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [cendol, setCendol] = useState(2);

  const handleCendolUpdate = (updatedCendol) => {
    setCendol(updatedCendol);
  };

  return (
    <div>
      <ComponentB cendol={cendol} onCendolUpdate={handleCendolUpdate} />
    </div>
  );
};

export default ComponentA;
