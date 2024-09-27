import React, { useState } from "react";
import Chip from "../Chip/Chip";

export default function Autocomplete({ chips, setChips }) {
  const [email, setEmail] = useState("");
  return (
    <div>
      {chips &&
        chips.map((chip, idx) => {
          <Chip key={"chip" + idx}>Chip</Chip>;
        })}
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}
