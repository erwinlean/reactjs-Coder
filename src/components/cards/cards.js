import react from "react";
import bulma from "bulma";
import css from "./cards-style.css";

const cards = ({title , subtitle , imgProduct , notasProduct , price}) => { 
    return(
        <div class="card">
            <div class="card-content ">
                <p class="title is-centered ">{title}</p>
                <p class="subtitle is-centered ">{subtitle}</p>
            </div>
            <div className="card-image">
                <img src={imgProduct}></img>
            </div>
            <footer class="card-footer"> 
                <p class="card-footer-item">
                    <span>{notasProduct}</span>
                </p>
                <p class="card-footer-item">
                    <span>$ {price}</span>
                </p>
            </footer>
        </div>
    )
}
export default cards;