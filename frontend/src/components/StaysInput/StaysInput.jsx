import React from "react";
import { Button } from "react-bootstrap";
import "./StaysInput.css";
import user from "../../assets/icons/user.jpg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StaysInputContext } from "../../Contexts/StaysInputContext";

export const StaysInput = () => {
  const { handleChange } = useContext(StaysInputContext);

  return (
    <div className="stays-input-container">
      <div className="input-container">
        <div className="location-input">
          <label className="label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>

            <input
              type="text"
              placeholder="Going to"
              className="migrate-to"
              name="location"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="date-label">
            <div>Check-in</div>
            <input
              type="date"
              placeholder="date"
              className="date-picker"
              name="checkin"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="date-label">
            <div> Check-out</div>
            <input
              type="date"
              placeholder="date"
              className="date-picker"
              onChange={handleChange}
              name="checkout"
            />
          </label>
        </div>
        <div className="traveller-box">
          <div className="traveller-container">
            <div>
              <img src={user} alt="user-icon" className="user-icon" />
            </div>
            <div>
              <div>Travellers</div>
              <div>Travellers details</div>
            </div>
          </div>

          <div style={{ display: "none" }} className="traveller-input">
            travelers and room details input
          </div>
        </div>
      </div>
      <div className="input-additional">
        <label>
          <input type="checkbox" />
          {"Add a flight "}
        </label>
        <label>
          <input type="checkbox" />
          {"Add a Car "}
        </label>
      </div>
      <div className="button">
        <Button variant="primary" size="lg">
          <Link
            to="/searchResult"
            style={{ textDecoration: "none", color: "white" }}
          >
            Search
          </Link>
        </Button>{" "}
      </div>
    </div>
  );
};
