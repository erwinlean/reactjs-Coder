import react from "react";
import bulma from "bulma"; 
import carrito from "./img/carrito.png"
import css from "./cardWidget.css" 

const cardWidget = () => {
    return(
        <button className=" button-carrito"><img className="navbar-carrito" src={carrito}></img></button>
    )
}
export default cardWidget