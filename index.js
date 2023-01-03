const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const app = express()
const port = 3031 || process.env.port
const connection = `mongodb+srv://Muchmark:${process.env.mongopassword}@cluster0.irij3nk.mongodb.net/reshimgath?retryWrites=true&w=majority`
const authUser = require("./api/authUser")
const cron = require('node-cron');

//use middlewaers 
app.use(cors())
app.use(bodyParser.json())

//connect to mongodb
mongoose.set('strictQuery', true);
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {

}).catch((err) => {
})

app.get("/", (req, res) => {
    res.status(200).send("hello user")
})

//add the routers
app.use('/auth', authUser)

app.listen(port, () => {
    console.log("app listening on port " + port)
})