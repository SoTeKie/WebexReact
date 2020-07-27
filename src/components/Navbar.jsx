import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <ul>
            <li><Link to='/view-all'>Zobrazit vsetky podnety</Link></li>
            <li><Link to='/add-new'>Pridat novy podnet</Link></li>
        </ul>
    )
}

export default Navbar;