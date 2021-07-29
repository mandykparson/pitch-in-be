const express = require('express');
const router = express.Router();
const { BankAccount } = require('../models/bank_account')

router.get('/bank_accounts', (_, response) => {
    BankAccount.query()  
        .withGraphFetched('bank') 
        .then(accounts => response.json(accounts))
});

router.post('/bank_accounts', (request, response) => {
    const bank_account = request.body.bank_account;
    BankAccount.query()
        .insert({ account_number: bank_account.account_number, total: bank_account.total, bank_id: bank_account.bank_id })
        .then(account => response.status(201).json(account))
})

router.delete('/bank_accounts/:id', (request, response) => {
    const deleteThis = request.params.id
    const bank = request.body
    BankAccount.query()
        .where('id', deleteThis)
        .del()
        .then(bank => response.status(410).json(bank))
})

module.exports = { bankAccountsRouter: router }