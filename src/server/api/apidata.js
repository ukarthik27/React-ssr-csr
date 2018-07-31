const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors())
var homepageData = [
    {
        title : "title1",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        title : "title2",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        title : "title3",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    }
] 
var aboutpageData = [
    {
        title : "title1",
        data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
]

app.get("/api/getHomedata",(req,res)=>{
    res.send(homepageData);
})

app.get("/api/getAboutdata",(req,res)=>{
    res.send(aboutpageData);
})

app.listen(3014, () => console.log('Listening on port 3014 for API calls!'));
