const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const indexRoutes = require('./routes/index.js')
const port = process.env.PORT || 3000;


const app = express()


app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))

app.use(bodyParser.json({
    limit: '50mb'
}))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use('/', indexRoutes)


app.listen(port, () => {
    console.log(`server is up in port ${port}`);
})







