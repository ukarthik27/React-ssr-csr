import React, { Component } from "react";
//import "./app.css";
import ReactImage from "./react.png";
import fs from 'fs';
import { basename, join } from 'path';
import Navbar from "./Navbar";
import { StaticRouter, Route, Link } from "react-router-dom";
import fetch from 'isomorphic-fetch';

const styleApp = fs.readFileSync(
    join(__dirname, 'Html.css'),
    'utf-8',
);

export default class App extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
          
        console.log(this.props.data);    
        var  context = {}
        return (
            <html>
                <head>
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: styleApp }} />
                    <script src="/build/bundle.js" defer></script>
                </head>
                <body>
                    <div id="header">
                        <img id="logo" src='/static/download.png' alt="react" />
                        <div id="navbar">
                            <StaticRouter location={this.props.url} context={context}>
                                <Navbar />
                            </StaticRouter>
                        </div>
                        <div id="user-name">{this.props.data.username}</div>
                    </div>
                    <div id="root">
                    </div>
                </body>
            </html>
        );
    }
}
