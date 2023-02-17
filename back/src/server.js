const express = require('express');
const router = require('./router');
const cors = require("cors");
const app = express();
const {createNewUser, signin} = require("./handlers/user")
const {createNewAdmin,adminSignin} = require("./handlers/admin")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use('/api', router);
app.post("/user", createNewUser);
app.post("/signin", signin);
app.post("/admin", createNewAdmin);
app.post("/adminsignin", adminSignin);

app.get("/", (req, res) =>{
  res.send("bicycle loan system");
});

module.exports = app;