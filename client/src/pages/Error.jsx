import React from 'react';
import '../sass/pages/Error.scss'
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className='page-error'>
            <div className="section">
                <p><span>4</span><span>0</span><span>4</span></p>
                <p>Something's wrong here...</p>
                <p>We can't find the page you're looking for.</p>
                <NavLink to='/'>
                    <button>Back Home</button>
                </NavLink>
                <button></button>
            </div>
        </div>
    );
};

export default Error;