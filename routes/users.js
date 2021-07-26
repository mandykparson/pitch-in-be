const express = require('express');
const router = express.Router();
const { User } = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.get('/users', (request, response, next) => {
  //   const { authorization } = request.headers;

  //   if (!authorization) {
  //     response.status(403).send({ error: 'Bearer token must be present'})
  //   } else {
  //     const token = authorization.split(' ')[1]
  //     const secret = process.env.AUTH_SECRET;
  //     const decoded_token = jwt.verify(token, secret)
  //     const { user_id } = decoded_token;
  //   }
  //   next();
  // }, (request, response) => {
    User.query()
      .withGraphFetched('pitches')
      .then(users => response.json(users));
});

// router.get('/users', authenticate, sendUsers)

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

router.post('/login', (request, response) => {
  const { user } = request.body;

  User.query()
    .findOne({ username: user.username || '' })
    .withGraphFetched('pitches')
    .then(existingUser => {
      if (!existingUser) {
        response.status(401).json({ error: "Invalid Username or Password"})
      } else {
        bcrypt.compare(user.password, existingUser.password_digest)
          .then(isMatch => {
            if (!isMatch) {
              response.status(401).json({ error: "Invalid Username or Password"})
            } else {
              const secret = process.env.AUTH_SECRET;
              const payload = { user_id: existingUser.id };
              const token = jwt.sign(payload, secret);
              response.status(200).json({ token, existingUser})
            }
          })
        }
    })
})

module.exports = { usersRouter: router };
