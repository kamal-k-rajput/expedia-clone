import React from "react";
import "./Filter.css";
export const PropertyType = () => {
  const property = ["Bed and Breakfast", "Apartment", "Hotel"];
  return (
    <div>
      <p className="filter-by">Property type</p>
      <div className="filter-option-container">
        {property.map((e) => {
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
