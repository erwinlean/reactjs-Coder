import react from "react";
import bulma from "bulma"; 
import css from "./cardWidget.css" 
import carrito from "../images/icons/carrito.png"; 

const cardWidget = () => {
    
    return(
        <button className=" button-carrito"><img className="navbar-carrito" src={carrito}></img></button>
    )
}
export default cardWidget