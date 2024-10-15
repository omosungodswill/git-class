const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Welcome to the API!")
});

module.exports = app;