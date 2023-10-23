const express = require('express');
const transactionRouter = express.Router();
const transactionArray = require('../models/data');

transactionRouter.use(express.json());

// READ Transactions (Index)
transactionRouter.get('/', (req, res, next) => {
    try{
        if(transactionArray && transactionArray.length > 0) { 
            res.status(200).send(transactionArray); 
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
            res.status(200).send(transaction);
        }
        else {
            res.status(404).send({message: "Could not find transaction"});
        }

    }
    
    catch(error){
        next(error);
    }

});


// Create Transactions (Create)
transactionRouter.post('/', (req,res, next) => { 
    try {
        const transactionBody = req.body;
        if(transactionBody){
            transactionArray.push(transactionBody);
            res.status(201).send(transactionBody);
        }
        else{
            res.status(404).send({message: "Transaction was not created"});
        }
    }

    catch(error){
        next(error);
    }

});

transactionRouter.put('/:id', (req,res,next) => {
    try{
        const transactionId = parseInt(req.params.id);
        const transactionToUpdate = req.body; 
        const transactionIndex = transactionArray.findIndex(element => element.id === transactionId);

        if(transactionIndex === -1){
            res.status(404).send({message: "Transaction not found"});
        }

        /// takes the transaction from the db (transactionArray) that matches the index
        const currentTransaction = transactionArray[transactionIndex];
       
        /// loop through the transaction that was requested 
        for(let key in transactionToUpdate) {
            if(currentTransaction.hasOwnProperty([key])){
                currentTransaction[key] = transactionToUpdate[key]; ///from the request
            }
        }

        /// updates the transaction in the array of transactions (data.js)
        transactionArray[transactionIndex] = currentTransaction;

        res.send(currentTransaction);
    }

    catch(error) {
        next(error);
    }

});



module.exports = transactionRouter