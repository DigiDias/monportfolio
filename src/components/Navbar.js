import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/navbar-footer.scss";
import User from "./user";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><User/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link> 
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/mentions">Mentions Légales</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
