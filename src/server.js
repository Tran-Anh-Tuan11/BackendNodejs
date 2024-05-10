const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
require('dotenv').config()
const webRoutes = require('./routes/web')


//
const app = express()
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config template engine 
configViewEngine(app)

//route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})