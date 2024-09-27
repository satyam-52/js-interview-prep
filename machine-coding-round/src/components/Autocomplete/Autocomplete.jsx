import React, { useState } from "react";
import Chip from "../Chip/Chip";

export default function Autocomplete({ chips, setChips }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setChips((chips) => {
      chips.push({ id: chips.length + new Date().getTime(), value: email });
      return chips;
    });
    setEmail("");
  };

  const handleClick = (id) => {
    setChips((chips) => {
      chips = chips.filter((c) => c.id !== id);
      return chips;
    });
  };

  return (
    <div className="autocomplete-wrapper">
      <div className="chip-wrapper">
        {chips &&
          chips.map((chip, idx) => {
            return (
              <Chip key={chip.id} onClick={() => handleClick(chip.id)}>
                {chip.value}
              </Chip>
            );
          })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
}
