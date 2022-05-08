import React from "react";

import "./Final_things.css";
export const FinalAllThings = (props) => {
  return (
    <div className="card">
      <p>{props.title}</p>
      <p classname="things_para">{props.things}</p>
    </div>
  );
};
