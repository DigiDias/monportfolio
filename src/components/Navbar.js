import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";  // ✅ Correction de l'importation
import "../styles/navbar-footer.scss";
import User from "./user";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" ><User/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink className="nav-link" to="/services" activeClassName="active">Services</NavLink>
                        <NavLink className="nav-link" to="/portfolio" activeClassName="active">Portfolio</NavLink> 
                        <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                        <NavLink className="nav-link" to="/mentions" activeClassName="active">Mentions Légales</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
