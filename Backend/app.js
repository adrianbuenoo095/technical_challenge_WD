require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const phoneRoute = require('./routes/phone.routes')
app.use( "/phones", phoneRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})