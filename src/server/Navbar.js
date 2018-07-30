import React from 'react';
import { StaticRouter, Link, Route } from 'react-router-dom';
import Home from "../client/Home";
import About from "../client/About";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <StaticRouter>
                <React.Fragment>
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <div>
                        <Route path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                    </div>
                </React.Fragment>
            </StaticRouter>
        )
    }
}

export default Navbar;