import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavbarComponent } from "./components/Header/Navbar/NavbarComponent";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
