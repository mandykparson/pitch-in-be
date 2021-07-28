const express = require('express');
const router = express.Router();
const { Bank } = require('../models/bank')

router.get('/banks', (_, response) => {
    Bank.query()
        .then(banks => response.json(banks))
});

router.post('/banks', (request, response) => {
    const bank = request.body.bank;
    Bank.query()
        .insert({ name: bank.name, icon: bank.icon })
        .then(bank => response.status(201).json(bank))
})

router.delete('/banks/:id', (request, response) => {
    const deleteThis = request.params.id
    const bank = request.body
    Bank.query()
        .where('id', deleteThis)
        .del()
        .then(bank => response.status(410).json(bank))
})

module.exports = { banksRouter: router }