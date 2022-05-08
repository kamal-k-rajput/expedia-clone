import React from "react";
import "./Filter.css";
export const GuestRating = () => {
  const guestRating = ["Any", "Wonderful 4.5+", "Very Good 4+", "Good 3.5+"];
  return (
    <div>
      <p className="filter-by">Guest Rating</p>
      <div className="filter-option-container">
        {guestRating.map((e) => {
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
