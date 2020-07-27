import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div>
            <h1>The page you were looking for was not found</h1>
            <Link to='/view-all'>Return to homepage</Link>
        </div>
    );
}

export default NotFound;