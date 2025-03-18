import { Link } from "react-router-dom"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./user";

const Infocontact = ()=>{
    return(
        <address>
        
        <p>40 rue laure Diebold</p>
        <p>69009 Lyon, France</p>
      
      <p><Link to="tel:1020304050">10 20 30 40 50</Link></p>
      <p><Link to="mailto:johndoe@gmail.com">johndoe@gmail.com</Link></p>
      </address>
    )
}

export default Infocontact;