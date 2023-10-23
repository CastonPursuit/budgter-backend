const express = require('express');
const transactionRouter = express.Router();
const transactionArray = require('../models/data');

transactionRouter.use(express.json());

// READ Transactions (Index)
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

// READ Transactions (Show)

transactionRouter.get('/:id', (req, res, next) => { 
    try {
        const id = req.params.id;                           
        const transaction = transactionArray.find(item => item.id === parseInt(id));

        if(transaction){
            res.send(transaction);
        }
        else {
            res.status(404).send({message: "Could not find transaction"});
        }

    }
    
    catch(error){
        next(error);
    }

})





module.exports = transactionRouter