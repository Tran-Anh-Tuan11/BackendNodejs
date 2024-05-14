const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
require('dotenv').config()
const webRoutes = require('./routes/web')
const connection = require('./config/database')

//
const app = express()
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config template engine 
configViewEngine(app)

//route
app.use('/', webRoutes)


connection.query(
    'SELECT * FROM Users u ',
    function (err, results, fields) {
        console.log("results =", results); // results contains rows returned by server
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})