import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Stylesheets/Center.module.css'

function NotFound(){
    return(
        <div className={style.center}>
            <h1>The page you were looking for was not found</h1>
			<Link to='/view-all'><p>Return to homepage</p></Link>
        </div>
    );
}

export default NotFound;
