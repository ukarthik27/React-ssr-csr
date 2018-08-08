import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <li className="nav-li"><Link id="nav-link" to="/Home">HOME</Link></li>
                <li className="nav-li"><Link id="nav-link" to="/About">ABOUT</Link></li>
            </React.Fragment>
        )
    }
}

export default Navbar;