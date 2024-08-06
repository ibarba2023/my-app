import React, { useState } from "react";
import "./input-birthday.css";

export const InputBirthday = ({ setBirthday }) => {
  const [birthday, setBirthdayInput] = useState("");

  const handleChange = (e) => {
    setBirthdayInput(e.target.value);
    setBirthday(e.target.value);
  };

  return (
    <form className="formBirthday">
      <label className="label">Enter your date of birth:</label>
      <input
        type="date"
        className="input"
        value={birthday}
        onChange={handleChange}
      />
    </form>
  );
};
