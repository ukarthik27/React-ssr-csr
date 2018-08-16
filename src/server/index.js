const express = require('express');
import React from 'react';
import Html from "../client/Html";
import { renderToString } from "react-dom/server";
import apiRoutes from "../routes/apiroutes";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Mainreducer from "../universal/MainReducer";
import fetch from "isomorphic-fetch";
var bodyParser = require('body-parser')

const os = require('os');
var cors = require('cors')

const allReducers = combineReducers({
    items: Mainreducer
});

const store = createStore(allReducers);


const app = express();

app.use(cors())
app.use(bodyParser.json())
bodyParser.urlencoded({extended: true})

app.use("/static", express.static('static'));
app.use("/build", express.static('build'));

//app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/favicon.ico', (req, res) => res.send(""))
app.use("/LoginValidate", (req, res) => {
    console.log("------- server side user obj:", req.body)
    fetch("http://localhost:3014/Validate", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(req.body)
    })
        .then(response => response.json())
        .then(data => {
            console.log("====== user id in node :", data.user_id)
            res.send(data)
        })
        .catch(error => console.log("error : ", error))

})
app.get('*', (req, res) => {
    console.log("req url in server side:", req.url)
    var api_url = ""
    for (let i = 0; i < apiRoutes.length; i++) {
        if (apiRoutes[i].path === req.url)
            api_url = apiRoutes[i].api
    }
    console.log("server side - api_url:", api_url)
    fetch(api_url)
        .then(response => response.json())
        .then((data) => {
            var resp_obj = {
                username: os.userInfo().username,
                pagedata: data,
                pageType: req.url.slice(1).toLowerCase()
            }
            store.dispatch({ type: "PREFETCH", payload: resp_obj })
            //console.log("data :", data)
            console.log("req.url :", req.url, "->", store.getState())

            const html = renderToString(
                <Provider store={store} >
                    <Html url={req.url} initial_state={store.getState()} />
                </Provider>)
            res.send(`${html}`);
        })
        .catch((error) => {
            console.log("error : ", error)
        })
})

app.listen(3015, () => console.log('Listening on port 3015!'));
