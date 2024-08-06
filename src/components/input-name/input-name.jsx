import React, { useState } from "react";
import "./input-name.css";

export const InputName = ({ setName }) => {
  const [name, setNameInput] = useState("");

  const handleChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setName(name);
  };

  return (
    <form className="form">
      <label>Enter your name:</label>
      <input className="input" value={name} onChange={handleChange} />
      <button className="button" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};
