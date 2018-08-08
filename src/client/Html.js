import React, { Component } from "react";
import fs from 'fs';
import { basename, join } from 'path';
import Navbar from "./Navbar";
import { StaticRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Homesytle from "./Home.css";
import About from "./About";

const styleApp = fs.readFileSync(
    join(__dirname, 'Html.css'),
    'utf-8',
);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const state = this.props.initial_state

        const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`
        
        const styleFile = "/build/"+state.items.pageType + ".css"
        console.log("pageType",styleFile)
        //console.log("props in server side :", this.props)
        //console.log("username in server side :", this.props.initital_state.username)
        var context = {}
        return (
            <html>
                <head>
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: styleApp }} />
                    <script src="/build/index.js" defer></script>
                    <link rel = "stylesheet" type = "text/css"  href = {styleFile} />
                    <script dangerouslySetInnerHTML={{ __html: initialState }} />
                </head>
                <body id="container">
                    <StaticRouter location={this.props.url} context={context}>
                        <div id="Parent">
                            <div id="header">
                                <img id="logo" src='/static/download.png' alt="react" />
                                <div id="navbar">
                                    <Navbar />
                                </div>
                                <div id="user-name">{state.items.username}</div>
                            </div>
                            <div id="root">
                                <Route path="/Home" component={Home} />
                                <Route path="/About" component={About} />
                            </div>
                        </div>
                    </StaticRouter>
                </body>
            </html>

        );
    }
}

export default App;