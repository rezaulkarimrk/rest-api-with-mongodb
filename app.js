const express = require("express");
const cors =  require("cors");
require('./config/db');

const usersRoute = require('./routes/users.route');

const app =  express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/users', usersRoute);

//api/users : GET
//api/users/:id :GET
//api/users :POST
//api/users/:id :PATCH
//api/users/:id DELETE


app.get('/', (req, res) => {
    res.sendfile(__dirname + "/./views/index.html");
});


//wrong route handling
app.use((req, res, next) => {
    res.status(404).json({message: "route not found"});
});


//server error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broke"
    });
});

module.exports = app;