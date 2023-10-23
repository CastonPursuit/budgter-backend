const express = require('express');
const transactionRouter = express.Router();
const transactionArray = require('..//models/data');


transactionRouter.get('/', (req, res) => {
    res.send("Welcome")
})





module.exports = transactionRouter