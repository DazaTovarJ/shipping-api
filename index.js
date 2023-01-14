let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
require("dotenv").config()


const usuarioRoute = require('./routes/usuario.route')
/*mongoose
    .connect(process.env.MONGO_DB_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })*/

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
    }))

app.use(cors())
//app.get('/', (req,resp) => {resp.json({name: "Api Insta Ya", version:1.0})})
app.use('/usuarios', usuarioRoute)


// 404 Error
app.use((req, res, next) => {
    next(createError(404))
})

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})

// PORT
const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})