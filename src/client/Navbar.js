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
            <BrowserRouter>
                <React.Fragment>
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <div>
                        <Route path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                    </div>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default Navbar;