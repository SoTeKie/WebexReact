import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Stylesheets/Navbar.module.css'

function Navbar(){
    return(
        <div className={style.container}>
            <Link to='/view-all'>
                <button className={style.link}>Zobrazit vsetky podnety</button>
            </Link>
            <Link to='/add-new'>
                <button className={style.link}>Pridat novy podnet</button>
            </Link>
        </div>
    )
}

export default Navbar;