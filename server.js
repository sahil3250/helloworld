/**********************************************************************************  
 * WEB322 – Assignment 1* 
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  *  
 * No part of this assignment has been copied manually or electronically from any other source*  (including web sites)
 *  or distributed to other students.* * 
 *  Name: ___________sahilpreet singh___________ 
 * Student ID: _______166445213_______ 
 * Date: ___12/01/2023_____________*
 * *  Online (Cyclic) URL: ______https://light-blazer-wasp.cyclic.app/________________________________________________
 * *********************************************************************************/ 





var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Sahilpreet Singh - 166445213");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);