import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
const Popup = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Popup;
