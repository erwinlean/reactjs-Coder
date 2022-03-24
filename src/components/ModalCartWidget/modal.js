import react from "react";
import bulma from "bulma";
import css from "./modalStyle.css";

const modalProducs = () => {
    return
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                  Modal title
                  </p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              asdasdasdasdasd
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Continue</button> 
            </footer>
          </div>
        </div>
}   
export default modalProducts;