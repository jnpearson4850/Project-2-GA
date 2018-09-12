const express = require("express")
const app = express()
const hbs = require("hbs")
const parser = require("body-parser")
const methodOverride = require("method-override");
const mongoose = require("mongoose")

app.set("view engine", "hbs") //unsure
app.set('views', __dirname + '/views') //unsure
app.use(express.static("public")) //unsure
app.use(methodOverride('_method'));
app.use(parser.urlencoded({
    extended: true
}))//good
// app.use(mongoose("_mongoose"))

// use.require routes here

app.use(require('./routes/application.js'))
app.use(require('./routes/user.js'))
app.use(require('./routes/workout.js'))


app.listen(3000, () => console.log("server is running"));
// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`)
// })