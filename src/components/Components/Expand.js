import React from "react";
import "./../../css/Components/Expand.css";

const Expand = expanded => {
  // alert(expanded.expanded);
  if (expanded.expanded === true) {
    // retturn negative
    return (
      <div className="icon">
        <div className="minus">
          <span className="horizontal" />
        </div>
      </div>
    );
  }
  return (
    <div className="icon">
      <div className="plus">
        <span className="vertical" />
        <span className="horizontal" />
      </div>
    </div>
  );
};

export default Expand;
