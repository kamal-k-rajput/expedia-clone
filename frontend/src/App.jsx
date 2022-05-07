import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import {Flight} from "./components/Flight";
import {Routes,Route} from "react-router-dom"
import {Flightresult} from "./components/flightresult"




function App() {
  return (
    <div className="App">
     {/* <Flight/> */}
     <Routes>
       <Route path="/flightresult" element={<Flightresult/>}/>
       <Route path="/" element={<Flight/>} ></Route>
     </Routes>
     {/* <Flightresult/> */}
    </div>
  );
}

export default App;
