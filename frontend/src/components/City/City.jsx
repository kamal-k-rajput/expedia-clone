import { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./City.css";
import add from "../../assets/project_img.jpg";
import { AllThings } from "../All_things/AllThings";
import { Final_all_thing } from "../All_things/FinalAllThings";
import { CityInformation } from "../CityInformation/CityInformation";

export const City = () => {
  return (
    <div className="cityComponent">
      <div className="leftdiv">
        <p className="search_para">Search for an activity</p>

        <div className="input_icon">
          <div>
            {" "}
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Enter a keyword"
            className="input"
          ></input>
        </div>

        <p className="search_para">Filter by</p>
        <p className="saftey_practices">Cleaning and Safety practices</p>

        <div className="cleaning_safety">
          <input type="checkbox" className="checkbox"></input>
          <div>
            {" "}
            Enhanced cleaning
            <p className="iipara">
              Activity suppliers taking additional steps to clean and sanitise
            </p>
          </div>
        </div>
        <p className="saftey_practices">Traveller rating</p>
        <div className="ist_radio">
          {" "}
          <input type="radio"></input>Any
        </div>
        <div className="ist_radio">
          {" "}
          <input type="radio"></input>Wonderful 4.5+
        </div>
        <div className="ist_radio">
          {" "}
          <input type="radio"></input>Very good 4+
        </div>
        <div className="ist_radio">
          {" "}
          <input type="radio"></input>Good 3.5+
        </div>

        <p className="saftey_practices">Duration</p>
        <div className="ist_radio">
          {" "}
          <input type="checkbox"></input>Less than 1 hour
        </div>
        <div className="ist_radio">
          {" "}
          <input type="checkbox"></input>1 to 4 hour
        </div>
        <div className="ist_radio">
          {" "}
          <input type="checkbox"></input>4 to 1 day
        </div>
        <div className="ist_radio">
          {" "}
          <input type="checkbox"></input>More than 1 day
        </div>
      </div>

      {/*  right div */}
      <div className="rightdiv">
        <AllThings />
        <CityInformation />
      </div>

      {/*  Image div */}
      <div className="imgdiv">
        <img src={add} alt="user"></img>
      </div>
    </div>
  );
};
