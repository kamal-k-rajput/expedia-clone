import React from "react";
import "./Filter.css";
export const PaymentType = () => {
  const payment = ["Fully Refundable", "Reserve now, pay later"];
  return (
    <div>
      <p className="filter-by">Payment type</p>
      <div className="filter-option-container">
        {payment.map((e) => {
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
