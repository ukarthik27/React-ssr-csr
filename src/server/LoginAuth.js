const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
const fetch = require("isomorphic-fetch")
const app = express();

app.use(bodyParser.json())
bodyParser.urlencoded({ extended: true })



app.use(cors())

app.post("/Validate", (req, res) => {
    var Email = req.body.email
    //console.log("Body :",req.body)
    fetch("http://localhost:1337/userinfo/?userEmail=" + Email)
        .then(res => res.json())
        .then(data => {
            if (data.length === 0)
                res.send(false)
            else {
                var user_obj = data[0]
                console.log("----user obj in LoginAuth:", user_obj)
                if (user_obj.userPwd === req.body.password) {
                    res.send({
                        user_id: user_obj._id,
                        PersInfo: user_obj.userPersInfo,
                        userData: user_obj.userdata
                    })

                }

                else
                    res.send(false)
            }
        })
})

app.get("/userinfo", (req, res) => {
    console.log("req params in login auth", req.query._id)
    fetch("http://localhost:1337/userinfo?_id=" + req.query._id)
        .then(res => res.json())
        .then((data) => {
            var user_obj = data[0]
            console.log("-+-+-+-+- user obj in get user data:", user_obj)
            res.send({
                user_id: user_obj._id,
                PersInfo: user_obj.userPersInfo,
                userData: user_obj.userdata
            })
        })

})
app.listen(3014, () => console.log('Login Auth up and running'))