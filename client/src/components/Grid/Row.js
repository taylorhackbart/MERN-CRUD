import React from "react";

// This Row component lets us use a bootstrap row without having to think about class names
export function Row(props) {
  return (
    <>
      <div
        id="mainContent"
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px",
          gridAutoRows: "minMax(100px, auto)",
        }}
      >
       {props.children}
      </div>
    </>
  );
}
