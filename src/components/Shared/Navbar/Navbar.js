import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-4 nav-modify">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link className="nav-link  ms-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Projects</a> */}
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Testimonials</a> */}
                            <Link className="nav-link" to="/testimonial">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">About me</a> */}
                            <Link className="nav-link" to="/about">About me</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Resume</a> */}
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Contact</a> */}
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>

    );
};

export default Navbar;