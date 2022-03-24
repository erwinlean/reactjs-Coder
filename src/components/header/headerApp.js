/* This example requires Tailwind CSS v2.0+ */
import react from "react";
import bulma from "bulma"; 
import css from "./header.css" 
import Widget from "../cartWidget/carWidget";
import logo from "../images/icons/x.png";

const header = () => {
  return (
    <nav className="navbar-header navbar is-boxed">
      <img className="navbar-brand" src={logo}></img> 
      <div className="navbar-item">
        <a className="navbar-item">Home</a> 
        <a className="navbar-item">Products</a>
        <a className="navbar-item">About us</a>
        <a className="navbar-item"> Contact</a>
      </div>
      <div className="navbar-end">
        <Widget id="carrito"/>
        <div className="navbar"> 
          <div className="buttons">
            <button className="button">Sign up</button>
            <button className="button">Log in</button>
          </div>
        </div> 
      </div> 
    </nav>
    )
} 
export default header;