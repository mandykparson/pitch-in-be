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
});

router.post('./login', (request, response) => {
  const { user } = request.body;

  User.query()
    .findOne({ username: user.username })
    .then(user => console.log('user', user))
      if (!user) {
        response.status(401).json({ error: "Invalid Username or Password"})
      }
})

module.exports = { usersRouter: router };
