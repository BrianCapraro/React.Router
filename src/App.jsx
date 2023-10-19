import "./App.css";
// import { Link, Route } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import Blue from './components/Blue'
// import Red from './components/Red'
// import Home from './components/Home'
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <div id="container">
        <Nav />
        <Main className="squares" />
        <Footer />
      </div>
    </>
  );
}

export default App;
