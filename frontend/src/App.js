import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavbarComponent } from "./components/Header/Navbar/NavbarComponent";
import { Home } from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Result } from "./components/Stays/Result";
import { SignIn } from "./components/Auth/SignIn";
import { Signup } from "./components/Auth/Signup";
function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/stays" element={<Home />}></Route>
        <Route path="/searchResult" element={<Result />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* <Route path="/flight" element={<Result />}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
