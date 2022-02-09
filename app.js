const dotenv = require('dotenv')
dotenv.config()
require("express-async-errors")
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')
const mainRoutes = require("./routes/main")
const { connectToDB } = require('./db/db')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


const app = express()
const port = process.env.PORT || 8080


// connecting to DB
connectToDB(process.env.MONGO_URI)

//middleware...
app.use(express.static("./public"))
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/v1", mainRoutes)

app.use(notFound)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})