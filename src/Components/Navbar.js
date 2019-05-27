import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => (
    <nav>
        <h2 className= "logo-link">Burguer Queen</h2>
        <ul className= "nav-menu">
        <li><Link className= "nav-menu__link" to= "/">Mesero </Link> </li>
        <li><Link className= "nav-menu__link" to= "/Cocina">Cocina </Link></li>
        </ul>
        
    </nav>

);


export default Navbar;