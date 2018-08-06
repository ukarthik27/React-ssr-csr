import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import { renderRoutes } from 'react-router-config';
import routes from '../routes/apiroutes';
import Mainreducer from "../universal/MainReducer";
import { BrowserRouter, Route, Link } from "react-router-dom";

const allreducers = combineReducers({
    items: Mainreducer
})

const store = createStore(allreducers,window.__INITIAL_STATE__);

console.log("CLIENT - store:", store.getState())

ReactDOM.hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <Navbar />
        </Provider>
    </BrowserRouter >, document.getElementById('navbar'));
