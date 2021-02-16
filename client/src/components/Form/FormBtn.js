import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} >
      {props.children}
    </button>
  );
}
