import React from 'react';

import { NavLink } from 'react-router-dom';
import './style.css'


const PageNotFound = () => {
    return ( 
           <div  className="container">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404 Error</h1>
                        <h2>Page not found</h2>
                    </div>
                    <NavLink to ='/' className="NavLink">Homepage</NavLink>
                </div>
            </div>
    )
}

export default PageNotFound;