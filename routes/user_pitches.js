const express = require('express');
const router = express.Router();
const { UserPitch }  = require('../models/user_pitch');

router.get('/user_pitches', (request, response) => {
    UserPitch.query()
        .then(userPitches => response.json(userPitches))
});

router.post('/user_pitches', (request, response) => {
    const userPitch = request.body.user_pitch;
    UserPitch.query()
        .insert({ user_id: userPitch.user_id, pitch_id: userPitch.pitch_id})
        .then(userPitch => response.status(201).json(userPitch))
})

router.delete('/user_pitches/:id', (request, response) => {
    const deleteThis = request.params.id
    UserPitch.query()
        .where('id', deleteThis)
        .del()
        .then(deleteThis => response.status(410).json(deleteThis))
})

module.exports = { userPitchesRouter: router }