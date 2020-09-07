import React, { useState } from "react";

const TextEditor = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);

  const handleInput = (event) => setInput(event.target.value);

  const handleAppend = () => {
    setText([...text, input]);
    setInput("");
  };

  const handleUndo = () => {
    const last = text.lastIndexOf();
    setText(text.slice(0, last));
  };

  return (
    <React.Fragment>
      <div className="controls">
        <input
          className="word-input"
          type="text"
          data-testid="word-input"
          value={input}
          onChange={(event) => handleInput(event)}
        />
        <button
          data-testid="append-button"
          onClick={() => handleAppend()}
          disabled={!input}
        >
          Append
        </button>
        <button
          data-testid="undo-button"
          onClick={() => handleUndo()}
          disabled={!text.length}
        >
          Undo
        </button>
      </div>
      <div className="text-field" data-testid="text-field">
        {text.join(" ")}
      </div>
    </React.Fragment>
  );
};

export default TextEditor;
