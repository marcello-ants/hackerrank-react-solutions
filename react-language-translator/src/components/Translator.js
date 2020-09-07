import React, { useState } from "react";

const Translator = ({ translations }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => setInput(event.target.value);

  return (
    <React.Fragment>
      <div className="controls">
        <div className="input-container">
          <span>input:</span>
          <input
            type="text"
            className="text-input"
            data-testid="text-input"
            value={input}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="input-container">
          <span>output:</span>
          <input
            type="text"
            className="text-output"
            data-testid="text-output"
            readOnly
            defaultValue={translations.get(input)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Translator;
