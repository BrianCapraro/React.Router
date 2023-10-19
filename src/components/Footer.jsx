import "../App.css"
import { Link, Route } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import Blue from './components/Blue'
// import Red from './components/Red'
// import Home from './components/Home'

function Footer() {
  

    return (
      <>
      <div id="footer">
        <Link to = "/">home</Link>
        <Link to = "/blue">blue</Link>
        <Link to = "/red">red</Link>
        <Link to = "/purple">purple</Link>
        <Link to = "/green">green</Link>
        </div>
      </>
    )
  }
  
  export default Footer