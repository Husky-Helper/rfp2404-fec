require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "/client/dist")))
const PORT = process.env.PORT || 80;
app.listen(PORT, ()=> {
    console.log("Running at http://localhost:3000")
});