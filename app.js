const express = require("express")

const mongoose = require("mongoose")




const app = express()

//connection to mongodb

mongoose.connect("mongodb://localhost/todo", {

useNewUrlParser: true,

useUnifiedTopology: true,

});

// middlewares

app.use(express.urlencoded({ extended: true}))

app.use(express.static("public"));

app.set("view engine", "ejs");



// routes

app.use(require("./routes/index"))
app.use(require("./routes/todo"))



// server configurations....

app.listen(8000, () => console.log("Server started listening on port: 8000"))