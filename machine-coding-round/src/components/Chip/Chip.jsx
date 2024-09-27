import React from "react";

function Chip({ children, onClick }) {
  return (
    <span className="chip" onClick={onClick}>
      {children}
    </span>
  );
}

export default Chip;
