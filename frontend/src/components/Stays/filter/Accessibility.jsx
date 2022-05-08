import React from "react";
import "./Filter.css";
export const Accessibility = () => {
  const accessible = [
    "Wheelchair-accessible parking",
    "Lift",
    "Accessible bathroom",
  ];
  return (
    <div>
      <p className="filter-by">Accessibility</p>
      <div className="filter-option-container">
        {accessible.map((e) => {
          return (
            <div key={e} className="filter-one">
              <label className="label-input-cont">
                <input
                  type="checkbox"
                  name="scales"
                  className="checkbox-input"
                />
                <span>{e}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
