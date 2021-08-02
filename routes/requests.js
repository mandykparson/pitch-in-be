const express = require('express');
const router = express.Router();
const { Request } = require('../models/request')

router.get('/requests', (_, response) => {
    Request.query()  
        .withGraphFetched('pitch') 
        // .withGraphFetched('user') 
        .then(requests => response.json(requests))
});

router.post('/requests', (request, response) => {
    const requestMig = request.body.request;
    Request.query()
        .insert({ description: requestMig.description, amount: requestMig.amount,  user_id: requestMig.user_id, pitch_id: requestMig.pitch_id})
        .then(requestMig => response.status(201).json(requestMig))
})

router.delete('/requests/:id', (request, response) => {
    const deleteThis = request.params.id
    Request.query()
        .where('id', deleteThis)
        .del()
        .then(requestMig => response.status(410).json(requestMig))
})

module.exports = { requestsRouter: router }