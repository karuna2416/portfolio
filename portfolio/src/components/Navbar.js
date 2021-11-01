import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
        <div className="container my-2">
            <Link to="/" className="navbar-brand font-weight-bold text-dark">
                karuna sarawat
            </Link>
            <Link to = "/contact" className="ml-auto mx-3">
            
            <button className="btn  btn-outline-info ml-auto mx-3">
                contact me
            </button>
            </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsenav">
                <span className="fas fa-bars text-dark"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="collapsenav">

                <div className="navbar-nav">
                    <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-1">
                        Projects
                    </a>
                    <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-3">
                        blogs
                    </a>

                </div>
            </div>
        </div>
    </nav>
    );
}
export default Navbar;