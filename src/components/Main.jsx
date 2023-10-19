import "../App.css";
import { Link, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Purple from "./Purple";
import Green from "./Green";
import Darkblue from "./Darkblue";
import Lightblue from "./Lightblue";

function Main() {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/blue/:shade" element={<Blue />} />
          <Route path="/blue/dark-blue" element={<Darkblue />} />
          <Route path="/blue/light-blue" element={<Lightblue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/purple" element={<Purple />} />
          <Route path="/green" element={<Green />} />
        </Routes>
      </div>
    </>
  );
}

export default Main;
