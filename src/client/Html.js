import React, { Component } from "react";
//import "./app.css";
import ReactImage from "./react.png";
import fs from 'fs';
import { basename, join } from 'path';
import Navbar from "../server/Navbar";
const styleApp = fs.readFileSync(
    join(__dirname, 'app.css'),
    'utf-8',
);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: null };
    }

    componentDidMount() {
        fetch("/api/getUsername")
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

    render() {
        return (
            <html>
                <head>
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: styleApp }} />
                    <script src="/build/bundle.js" defer></script>
                </head>
                <body>
                    <div id="root">
                    </div>
                    <img src='/static/download.png' alt="react" />
                </body>
            </html>
        );
    }
}
