import React from "react";
import "./Filter.css";
export const Amenities = () => {
  const amenites = ["Free airport", "Spa", "Breakfast included"];
  return (
    <div>
      <p className="filter-by">Amenities</p>
      <div className="filter-option-container">
        {amenites.map((e) => {
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
