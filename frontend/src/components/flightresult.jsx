import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Model } from "./Model";
import { Dropdown } from "./dropdown";
import "./flightresult.css";
import { useState } from "react";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { WiHorizonAlt } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiDayHaze } from "react-icons/wi";
import { NavbarComponent } from "./Header/Navbar/NavbarComponent";
import { Header } from "./Header/Header";
export const FlightResult = () => {
  const [openmodel, setOpenmodel] = useState(false);
  const [selected, setSelected] = useState("Economy");
  const [flightdata, setFlightdata] = useState([]);
  const openpopup = () => {
    setOpenmodel(true);
  };

  useEffect(() => {
    fetch("http://188.166.98.109:5000/flight")
      .then((d) => d.json())
      .then((data) => {
        setFlightdata(data);
      });
  }, []);

  console.log(typeof flightdata);
  console.log(flightdata);

  return (
    <div className="flightresultpage">

      <Header />
      <div className="navbar">
        <div>
          Return <IoIosArrowDown />
        </div>
        <div onClick={openpopup}>
          Traveller <IoIosArrowDown />
        </div>
        <div>
          <Dropdown selected={selected} setSelected={setSelected} />
        </div>
        <div>
          Any Airline <IoIosArrowDown />
        </div>
        <div>
          More options <IoIosArrowDown />
        </div>
      </div>

      <div className="popupdiv">
        {openmodel && <Model setOpenmodel={setOpenmodel} />}
      </div>
      <div className="inputdiv2">
        <div className="migrate-container2">
          <ImLocation />
          <label className="input-location-container">
            <span className="spantag">Flying from</span>
            <input className="migrate2" type="text" />
          </label>
        </div>

        <button className="swapbtn2">
          <MdOutlineSwapHoriz />
        </button>
        <div className="migrate-container2">
          <ImLocation />
          <label className="input-location-container">
            <span className="spantag">Flying to</span>
            <input className="migrate2" type="text" />
          </label>
        </div>

        <input className="date2" type="date" placeholder="Departing" />
        <input className="date2" type="date" placeholder="Returning" />
        <button className="resultsearchbtn">Search</button>
      </div>

      <div className="maindisplaybox1">
        <div className="maindisplaybox2">
          <div className="filerdisplay">
            <h2>Filter by</h2>
            <div className="stopsfrom">
              <div>
                <h4>Stops</h4>
                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">Direct(46)</div>
                </div>
                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">1 Stop(60)</div>
                </div>

                <h4>Airlines</h4>

                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">IndiGo(37)</div>
                </div>
                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">Vistara(29)</div>
                </div>
                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">Go First(28)</div>
                </div>
                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">SpiceJet(12)</div>
                </div>

                <h4>Travel and baggage</h4>
                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">Seat choice included</div>
                </div>
                <div className="route">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="noofflight">Hand baggage included</div>
                </div>
              </div>
              <div>
                <h4>From</h4>
                <div className="filterpricediv">Rs13,379</div>
                <div style={{ paddingTop: "23px" }}>Rs13,697</div>
                <h4 style={{ paddingTop: "19px" }}>From</h4>
                <div style={{ paddingTop: "12px" }}>Rs13,379</div>
                <div style={{ paddingTop: "23px" }}>Rs13,339</div>
                <div style={{ paddingTop: "23px" }}>Rs13,339</div>
                <div style={{ paddingTop: "30px" }}>Rs13,617</div>
                <h4 style={{ paddingTop: "19px" }}>From</h4>
                <div style={{ paddingTop: "11px" }}>Rs15,814</div>
                <div style={{ paddingTop: "30px" }}>Rs13,379</div>
              </div>
            </div>
            <h4>Departure time in Mumbai</h4>
            <div className="morningbox">
              <div className="morning">
                <p className="dayicon">
                  <WiHorizonAlt />
                </p>
                <p className="day">Early Morning</p>
                <p className="time">(00:00-04:59)</p>
              </div>
              <div className="morning" style={{ marginLeft: "10px" }}>
                <p className="dayicon">
                  <WiDaySunny />
                </p>
                <p className="day"> Morning</p>
                <p className="time">(05:00-11:59)</p>
              </div>
            </div>
            <div className="afternoonbox">
              <div className="morning">
                <p className="dayicon">
                  <WiSunset />
                </p>
                <p className="day">Afternoon</p>
                <p className="time">(12:00-17:59)</p>
              </div>
              <div className="morning" style={{ marginLeft: "10px" }}>
                <p className="dayicon">
                  <WiDayHaze />
                </p>
                <p className="day">Evening</p>
                <p className="time">(18:00-23:59)</p>
              </div>
            </div>
            <h4>Arrival time in Delhi</h4>

            <div className="morningbox">
              <div className="morning">
                <p className="dayicon">
                  <WiHorizonAlt />
                </p>
                <p className="day">Early Morning</p>
                <p className="time">(00:00-04:59)</p>
              </div>
              <div className="morning" style={{ marginLeft: "10px" }}>
                <p className="dayicon">
                  <WiDaySunny />
                </p>
                <p className="day"> Morning</p>
                <p className="time">(05:00-11:59)</p>
              </div>
            </div>
            <div className="afternoonbox">
              <div className="morning">
                <p className="dayicon">
                  <WiSunset />
                </p>
                <p className="day">Afternoon</p>
                <p className="time">(12:00-17:59)</p>
              </div>
              <div className="morning" style={{ marginLeft: "10px" }}>
                <p className="dayicon">
                  <WiDayHaze />
                </p>
                <p className="day">Evening</p>
                <p className="time">(18:00-23:59)</p>
              </div>
            </div>
          </div>

          <div className="flightdisplay">
            <div>
              <span style={{ fontWeight: "bold" }} className="infoflight">
                Choose departing flight
                <MdKeyboardArrowRight />
              </span>
              <span className="infoflight">
                Choose Returning Flight
                <MdKeyboardArrowRight />
              </span>{" "}
              <span className="infoflight">Review your trip</span>
            </div>
            <hr />
            <div className="text-select">
              <div style={{ fontSize: "12px" }}>
                Prices displayed include taxes and may change based on
                availability. You can review any additional fees before
                checkout. Prices are not final until you complete your purchase.
              </div>
              <div>
                <select className="select">
                  <option>Price(Lowest)</option>
                  <option>Price(Highest)</option>
                  <option>Duration(Shortest)</option>
                  <option>Departure(Earliest)</option>
                  <option>Departure(Latest)</option>
                  <option>Arrival(Earliest)</option>
                  <option>Arrival(Latest)</option>
                </select>
              </div>
            </div>

            {flightdata.map((e) => {
              return (
                <div className="card-flight-result" key={e.id}>
                  <div className="res-container-flight">
                    <div className="time-container">
                      <span>{e.stime}</span>-<span>{e.etime}</span>
                    </div>
                    <div>{e.dest}</div>
                    <div>
                      <img src={e.logo} className="flight-logo" alt="" />
                      {e.pname}
                    </div>
                    <div>{e.safe}</div>
                  </div>
                  <div>{e.time}</div>
                  <div className="right-container">
                    <div>
                      {"Rs "}
                      {e.price}
                    </div>
                    <div>{"Return per traveller"}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ad-display" style={{ cursor: "pointer" }}>
            <img
              src="https://tpc.googlesyndication.com/simgad/17447823249981941085?"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
