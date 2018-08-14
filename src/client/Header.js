import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LoginComp from "./LoginComp";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="header">
                <img id="logo" src='/static/download.png' alt="react" />
                <div id="navbar">
                    <Navbar />
                </div>
                <div id="user-name" >
                    <li className="nav-li"><Link id="nav-link" to="/Login">-UR NAME-</Link></li>
                </div>
            </div>
        )
    }
}

export default Header;