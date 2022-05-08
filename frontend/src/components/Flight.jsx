import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import "./Flight.css";
import { Model } from "./Model";
import { Dropdown } from "./dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { Link } from "react-router-dom";
import { Oneimg } from "./Home/Oneimg";
import { Header } from "./Header/Header";

export const Flight = () => {
  const [openmodel, setOpenmodel] = useState(false);
  const [selected, setSelected] = useState("Economy");

  const openpopup = () => {
    setOpenmodel(true);
  };

  return (
    <div className="flightnav" id="flight">
      <Header />
      <div className="maindiv">
        <div className="firstdiv">
          <div>Return</div>
          <div>One-way</div>
          <div>Multi-city</div>
        </div>
        <div className="seconddiv">
          <div></div>
          <div onClick={openpopup}>
            traveller <IoIosArrowDown />
          </div>
          <div>
            <Dropdown selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </div>
      {openmodel && <Model setOpenmodel={setOpenmodel} />}

      <div className="inputdiv">
        <div>
          <label className="migrate-container">
            <ImLocation />
            <input className="migrate" type="text" placeholder="Leaving from" />
          </label>
        </div>

        <button className="swapbtn">
          <MdOutlineSwapHoriz />
        </button>
        <div>
          <label className="migrate-container">
            <ImLocation />
            <input className="migrate" type="text" placeholder="Going to" />
          </label>
        </div>

        <div className="input-date-time">
          <span>Departing</span>
          <input className="date" type="date" />
        </div>
        <div className="input-date-time">
          <span>Returning</span>
          <input className="date" type="date" />
        </div>
      </div>

      <Link to="/flightresult">
        <button className="navflightbtn">Search</button>
      </Link>

      <Oneimg />
    </div>
  );
};

// {openmodel && <Model/>}   it's javascript syntax when open model is true then show popup else not
