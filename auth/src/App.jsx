import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { SignIn } from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
