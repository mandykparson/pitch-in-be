const express = require('express');const router = express.Router();
const { User } = require('../models/user')
const bcrypt = require('bcrypt')

router.get('/users', (request, response) => {
    User.query()
      .then(users => response.json(users));
});

router.post('/users', (request, response) => {
    const { user } = request.body;
    const saltRounds = 12; 
    bcrypt.hash(user.password, saltRounds)
      .then(hashedPassword => {
        User.query()
        .insert({ username: user.username, password_digest: hashedPassword })
        .then(newUser => response.status(201).json(newUser))
      })

   
})

module.exports = { usersRouter: router };
