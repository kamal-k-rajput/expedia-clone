import React from "react";
import "./Filter.css";
export const YourBudget = () => {
  const budgetfilter = [
      "Less than Rs 2000",
      "Rs 2,000 to Rs 4,000",
      "Rs 4,000 to Rs 8,000",
      "Rs 8,000 to Rs 11,000",
      "Greater than Rs 11,000",
      
  ];
  return (
    <div>
      <p className="filter-by">Your Budget</p>
      <div className="filter-option-container">
        {budgetfilter.map((e) => {
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
