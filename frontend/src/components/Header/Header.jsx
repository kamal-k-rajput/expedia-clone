import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div>
          <Link to="/stays">Stays</Link>
        </div>
        <div>
          <Link to="/flight">Flight</Link>
        </div>
        <div>Cars</div>
        <div>Packages</div>
        <Link to="/thingstodo">Things to do</Link>
      </div>
    </>
  );
};
