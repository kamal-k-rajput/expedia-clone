import React from "react";
import "./Result.css";
export const Card = ({ data }) => {
  return (
    <div>
      <div className="result-container">
        <div className="img-container">
          <img src={data.img} alt="placeholder"></img>
        </div>
        <div className="name-container">
          <div className="hotel-name">
            <h4>{data.name}</h4>
                      <h5>{ data.des}</h5>
          </div>
          <div className="details-container">
            <div>
              <div>{data.refund}</div>
              <div>before wed</div>
              <div>{data.reserve}</div>
              <div>
                <span className="rating-details">{data.rating}/5 </span>

                {data.rating2}
              </div>
            </div>
            <div>
              <div>10% off</div>
              <div>{data.rs}</div>
              <h5>Rs{data.rs1}</h5>
              <div>Rs{data.srs} Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
