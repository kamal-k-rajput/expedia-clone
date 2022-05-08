import React, { Component, useState } from "react";
import "./Model.css";
import { BsBoxArrowInUpRight } from "react-icons/bs";

export const Model = ({ setOpenmodel }) => {
  const [adult, setAdult] = useState(1);

  const [child, setChild] = useState(0);

  const [infant, setInfant] = useState(0);

  const closepopup = () => {
    setOpenmodel(false);
  };

  const adultcountchange = (value) => {
    if (adult === 1 && value === -1) {
      return;
    }
    setAdult(adult + value);
  };

  const childcountchange = (value) => {
    if (child === 0 && value === -1) {
      return;
    }
    setChild(child + value);
  };

  const infantcountchange = (value) => {
    if (infant === 0 && value === -1) {
      return;
    }
    setInfant(infant + value);
  };

  return (
    <div className="model">
      <div className="popupbox1">
        <h3 className="travellerh3tag">Travellers</h3>
        <div className="firstcontent">
          <div>Adults</div>
          <div className="incdec-div">
            <div>
              {" "}
              <button
                className="decbutton"
                onClick={() => {
                  adultcountchange(-1);
                }}
              >
                -
              </button>
            </div>
            <div>{adult}</div>
            <div>
              <button
                className="incdec-button"
                onClick={() => {
                  adultcountchange(1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="firstcontent">
          <div>Children</div>

          <div className="incdec-div">
            <div>
              {" "}
              <button
                className="decbutton"
                onClick={() => {
                  childcountchange(-1);
                }}
              >
                -
              </button>
            </div>
            <div>{child}</div>
            <div>
              <button
                className="incdec-button"
                onClick={() => {
                  childcountchange(1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <p className="ageptag">Ages to 17</p>
        <div className="firstcontent">
          <div>Infants</div>
          <div className="incdec-div">
            <div>
              {" "}
              <button
                className="decbutton"
                onClick={() => {
                  infantcountchange(-1);
                }}
              >
                -
              </button>
            </div>
            <div>{infant}</div>
            <div>
              <button
                className="incdec-button"
                onClick={() => {
                  infantcountchange(1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <p className="ageptag">Younger than 2</p>
        <p className="airline-rule">
          Airline Age Rules <BsBoxArrowInUpRight />
        </p>

        <button className="donebtn" onClick={closepopup}>
          Done
        </button>
      </div>
    </div>
  );
};
