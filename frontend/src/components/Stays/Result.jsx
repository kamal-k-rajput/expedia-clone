import React from "react";
import "./Result.css";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { AddressMap } from "./AddressMap";

import { PopularFilter } from "./filter/PopularFilter";
import { YourBudget } from "./filter/YourBudget";
import { GuestRating } from "./filter/GuestRating";
import { PaymentType } from "./filter/PaymentType";
import { PropertyType } from "./filter/PropertyType";
import { MealsPlan } from "./filter/MealsPlan";
import { Amenities } from "./filter/Amenities";
import { Accessibility } from "./filter/Accessibility";
const axios = require("axios").default;
export const Result = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://188.166.98.109:5000/hotel")
      .then(function (response) {
        // handle success
        setdata(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="sidebar-container">
          <div className="map-google">
            <AddressMap />
          </div>
          <div>
            <h4>Search By property name</h4>
            <input type="text" placeholder="e.g. Great Northern Hotel" />
            <h5>Filter by</h5>
            <div>
              <PopularFilter />
            </div>
            <div>
              <YourBudget />
            </div>
            <div>
              <GuestRating />
            </div>
            <div>
              <PaymentType />
            </div>
            <div>
              <PropertyType />
            </div>
            <div>
              <MealsPlan />
            </div>
            <div>
              <Amenities />
            </div>
            <div>
              <Accessibility />
            </div>
          </div>
        </div>
        <div className="element-container">
          {data.map((el) => {
            return <Card data={el} key={nanoid()} />;
          })}
        </div>
      </div>
    </>
  );
};
