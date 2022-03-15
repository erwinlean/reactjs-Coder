/* This example requires Tailwind CSS v2.0+ */
import react from "react";
import bulma from "bulma";
import logo from "./img/x.png"
import css from "./header.css"
function header() {
  return (
    <nav className="navbar-header navbar is-boxed">
      <img className="navbar-brand" src={logo}></img> 
      <a className="navbar-item">Home</a> 
      <a className="navbar-item">Products</a>
      <a className="navbar-item">About us</a>
      <a className="navbar-item"> Contact</a> 
      <div className="navbar-end">
        <div className="navbar">
          <div className="buttons">
            <a className="button">Sign up</a>
            <a className="button">Log in</a>
          </div>
        </div> 
      </div> 
    </nav>
    )
} 
export default header;