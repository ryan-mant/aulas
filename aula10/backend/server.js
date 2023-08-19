const express = require ('express')
const app = express()
const port = 8050
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://admin:admin123@appdatabase.ry0gm2w.mongodb.net/"

mongoose.connect(connectionString ,{
    dbName: "DevsMall"
}).then(() => {
    console.log(`Mongo UP on http://localhost:${port}`)
    app.listen()
}).catch((error) => {
    console.log(error)
})