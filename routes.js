'use strict';

const express = require('express');

// This array is used to keep track of user records
// as they are created.
const users = [];

// Construct a router instance.
const router = express.Router();

// Route that returns a list of users.
router.get('/users', (req, res) => {
  res.json(users);
});

// Route that creates a new user.
router.post('/users', (req, res) => {
  console.log('POST request sent.');

  // Get the user from the request body.
  const user = req.body;

  console.log('req.body added to user variable.');

  // Add the user to the `users` array.
  users.push(user);

  console.log('user data pushed to users array.');

  // Set the status to 201 Created and end the response.
  res.status(201).end();

  console.log('201 status code sent.');
});

module.exports = router;
