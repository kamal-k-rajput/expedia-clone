import React from "react";
import "./Filter.css";
export const MealsPlan = () => {
  const mealplan = [
    "Breakfast included",
    "Lunch included",
    "Dinner included",
  ];
  return (
    <div>
      <p className="filter-by">Meals plans available</p>
      <div className="filter-option-container">
        {mealplan.map((e) => {
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
