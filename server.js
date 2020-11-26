// const mongoose = require('mongoose')
const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

// displaying the public html
app.use( express.static('public') );

// parse incoming data for POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting to the route files
require('./router/api_routes.js')(app)
require('./router/html_routes.js')(app)

//initiating server to listen for requests
app.listen(PORT, function() {
    console.log("Server live on: http://localhost:" + PORT);
}); 
