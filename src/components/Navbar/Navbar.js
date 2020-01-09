import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

const Navbar = props => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" href="#">Homework67</span>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className='nav-item nav-link' to='/' exact>Guard</NavLink>
                    </div>
                </div>
            </nav>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Navbar;