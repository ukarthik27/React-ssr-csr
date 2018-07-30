const express = require('express');
import React from 'react';
import Html from "../client/Html";
import {renderToString} from "react-dom/server";
const os = require('os');

const app = express();

app.use("/static/",express.static('static'));
app.use("/build/",express.static('dist'));
app.get('/',(req,res)=>{
    const html = renderToString(<Html />)
    res.send(`${html}`);
})
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(3015, () => console.log('Listening on port 3015!'));
