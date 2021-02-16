import React from "react";

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea rows="12" cols="50" {...props} />
    </div>
  );
}
