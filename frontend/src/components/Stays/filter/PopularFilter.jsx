import React from "react";
import "./Filter.css";
export const PopularFilter = () => {
  const popularfilter = [
    "Free airport shuttle",
    "Bed & breakfast",
    "Big Ben",
    "Breakfast included",
    "Spa",
  ];
  return (
    <div>
      <p className="filter-by">Popular Filters</p>
      <div className="filter-option-container">
        {popularfilter.map((e) => {
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
