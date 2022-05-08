import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  width: 99%;
  height: 50px;
  border: 1px solid whitesmoke;
  box-shadow: 0px 1px 0px 0px rgba(0, 11, 38, 0.12);
  text-align: center;
  img {
    width: 150px;
    height: 50px;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <img
        src="https://www.expedia.co.in/_dms/interstitial/logo.svg?locale=en_GB&siteid=27"
        alt=""
      />
    </NavBar>
  );
};

export default Nav;
