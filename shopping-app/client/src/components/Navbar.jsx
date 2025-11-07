import React from "react";
import "./Navbar.css"
import { Link } from "react-router";

const Navbar=()=>{
    return(
        <div> 
            <div> Navbar</div>
            <Link to="/user/cart" className="link-style">Cart</Link>
            <Link to="/user/orders" className="link-style">View Orders</Link>
            <Link to="/user" className="link-style">Home</Link>
            <Link to="/user/logout" className="link-style">logout</Link>
        </div>
    )
}
export default Navbar