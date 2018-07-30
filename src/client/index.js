import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { renderRoutes } from 'react-router-config';
import routes from '../routes/routes';
import { BrowserRouter, Route, Link } from "react-router-dom";

console.log(renderRoutes(routes));
ReactDOM.hydrate(
    <BrowserRouter>
        <Navbar />
    </BrowserRouter >, document.getElementById('navbar'));
