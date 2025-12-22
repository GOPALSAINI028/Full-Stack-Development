import { useState, useRef, useEffect } from "react";

export default function TextInput({ onTextChange }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const clearInput = () => {
    setText("");
    onTextChange("");
    inputRef.current.focus();
  };

  return (
    <div className="box">
      <h2>Enter Text</h2>

      <textarea
        ref={inputRef}
        value={text}
        placeholder="Start typing..."
        onChange={(e) => {
          setText(e.target.value);
          onTextChange(e.target.value);
        }}
      ></textarea>

      <button onClick={clearInput}>Clear</button>
    </div>
  );
}
