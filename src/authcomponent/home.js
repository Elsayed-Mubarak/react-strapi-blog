import React from 'react';
import {Link}from 'react-router-dom';
import { Nav, Form, Button, FormControl, Navbar, NavDropdown } from 'react-bootstrap'
import CenterPhoto from '../BlogContainer/PhotoOnCenter/centerPhoto'
export default function Home() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Kware</Link>
                    <Link className="nav-item" to={"/"}>Home</Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <CenterPhoto />

        </div>
        
    );
}