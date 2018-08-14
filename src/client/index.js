import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Mainreducer from "../universal/MainReducer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import HtmlSytle from "./Html.css";
import Header from "./Header";
import LoginComp from './LoginComp';

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
                <Header />
                <div id="root">
                    <Route path="/Home" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Login" component={LoginComp} />
                </div>
            </div>
        </Provider>
    </BrowserRouter >, document.getElementById('container'));
