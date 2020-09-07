import React, { useState } from "react";

const CycleCounter = ({ cycle }) => {
  const [state, setState] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setState((state) => (state + 1 >= cycle ? 0 : state + 1));
  };

  return (
    <button
      data-testid="cycle-counter"
      style={{ fontSize: "1rem", width: 120, height: 30 }}
      onClick={handleClick}
    >
      {state}
    </button>
  );
};

export default CycleCounter;
