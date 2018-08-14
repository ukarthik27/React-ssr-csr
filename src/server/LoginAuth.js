const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
const fetch = require("isomorphic-fetch")
const app = express();

app.use(bodyParser.json())
bodyParser.urlencoded({extended: true})



app.use(cors())

app.post("/Validate",(req,res)=>{
    var Email = req.body.email
    console.log("Body :",req.body)
    fetch("http://localhost:1337/userinfo/?userEmail="+Email)
    .then(res => res.json())
    .then(data => {
        if(data.length === 0)
            res.send(false)
        else {
            var user_obj = data[0]
            if(user_obj.userPwd === req.body.password)
                res.send(true)
            else
                res.send(false)
        }
    })
})

app.listen(3014, () => console.log('Login Auth up and running'))