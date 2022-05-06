import React from "react";
import { Header } from "../Header/Header";
import { StaysInput } from "../StaysInput/StaysInput";
import { Oneimg } from "./Oneimg";

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <StaysInput></StaysInput>
      <Oneimg></Oneimg>
      <div>
        <p>Explore a world of travel with Expedia</p>
        {/* <a href=""></a> */}
      </div>
    </div>
  );
};
