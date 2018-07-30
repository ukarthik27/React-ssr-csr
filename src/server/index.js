const express = require('express');
import React from 'react';
import Html from "../client/Html";
import {renderToString} from "react-dom/server";
const os = require('os');
var cors = require('cors')

const app = express();

app.use(cors())

app.use("/static/",express.static('static'));
app.use("/build/",express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('*',(req,res)=>{
    
    var prmse = fetch("http://localhost:3015/api/getUsername") 
        .then(res => res.json())
        .catch((error) => { 
            console.log("error",error)          
        });

        console.log(prmse);
        prmse.then((data)=>{
            const html = renderToString(<Html url={req.url} data={data}  />)
            res.send(`${html}`);
        })
})

app.listen(3015, () => console.log('Listening on port 3015!'));
