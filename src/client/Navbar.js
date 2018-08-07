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
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
            </React.Fragment>
        )
    }
}

export default Navbar;