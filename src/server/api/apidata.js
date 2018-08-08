const express = require("express");
var cors = require('cors')
const fetch = require("isomorphic-fetch")
const app = express();
app.use(cors())
var homepageData = [
    {
        title : "Title 1",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        title : "Title 2",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        title : "Title 3",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    }
] 
var aboutpageData = [
    {
        title : "Title 1",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
]

app.get("/api/getHomedata",function(req,res){
    fetch("http://localhost:3015/api/getUsername")
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        var resp_obj = {
            username : data.username,
            pagedata : homepageData
        }
        console.log("Home response object:",resp_obj)
        res.send(resp_obj)
    })
    .catch((error)=>{
        console.log("error:",error)
    })
})

app.get("/api/getAboutdata",(req,res)=>{
    fetch("http://localhost:3015/api/getUsername")
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        var resp_obj = {
            username : data.username,
            pagedata : aboutpageData
        }
        console.log("About response object:",resp_obj)
        res.send(resp_obj)
    })
    .catch((error)=>{
        console.log("error:",error)
    })
})

app.listen(3014, () => console.log('Listening on port 3014 for API calls!'));
