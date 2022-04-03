import React from "react";
import { NavLink } from "react-router-dom";

function Navbar()
{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/catering">CATERING</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="locations">LOCATIONS</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/order">ORDER NOW</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}
export default Navbar;