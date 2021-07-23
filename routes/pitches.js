const express = require('express');
const router = express.Router();
const { Pitch } = require('../models/pitch')

router.get('/pitches', (request, response) => {
  Pitch.query()
    // .withGraphFetched('users')
    .then(pitches => response.json(pitches))
});

router.post('/pitches', (request, response) => {
  const pitch = request.body.pitch;
  Pitch.query()
    .insert({ title: pitch.title, description: pitch.description, image: pitch.image, total: pitch.total })
    .then(pitch => response.status(201).json(pitch))
})

router.delete('/pitches/:id', (request, response) => {
  const deleteThis = request.params.id
  Pitch.query()
    .where('id', deleteThis)
    .del()
    .then(deleteThis => response.status(410).json(deleteThis))
})

module.exports = { pitchesRouter: router }