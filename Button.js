import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      onClick={() => props.setFilter(props.name)}
    >
    </button>
  );
}

export default Button;