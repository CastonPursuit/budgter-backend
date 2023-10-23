const express = require('express');
const transactionRouter = express.Router();
const transactionArray = require('../models/data');

transactionRouter.use(express.json());

// GET Transactions
transactionRouter.get('/', (req, res, next) => {
    try{
        if(transactionArray && transactionArray.length > 0) { 
            res.send(transactionArray); 
        }
        else {
            res.status(404).send({message: "Transactions were not found."});
        }
    } 
    
    catch(error) {
        next(error);
    }
 
});





module.exports = transactionRouter