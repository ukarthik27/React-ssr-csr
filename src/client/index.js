import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import { renderRoutes } from 'react-router-config';
import routes from '../routes/apiroutes';
import Mainreducer from "../universal/MainReducer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const allreducers = combineReducers({
    items: Mainreducer
})

const store = createStore(allreducers, window.__INITIAL_STATE__);

console.log("CLIENT - store:", store.getState())
const state = store.getState()

ReactDOM.hydrate(
    <BrowserRouter>
        <Provider store={store}>
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
        </Provider>
    </BrowserRouter >, document.getElementById('container'));
