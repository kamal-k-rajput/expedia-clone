import React from "react";
import "./Result.css";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
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
      {data.map((el) => {
        return <Card data={el} key={nanoid()} />;
      })}
    </>
  );
};
