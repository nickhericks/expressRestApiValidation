'use strict';

const express = require('express');
// Construct a router instance.
const router = express.Router();


// This array is used to keep track of user records
// as they are created.
const users = [];


// Route that returns a list of users.
router.get('/users', (req, res) => {
  res.json(users);
});


// Route that creates a new user.
router.post('/users', (req, res) => {
  // Get the user from the request body.
  const user = req.body;

  // array of error messages
  const errors = [];

  // Validate that we have a `name` value.
  if (!user.name) {
    errors.push('Please provide a value for \'name\'');
  }

  // Validate that we have an `email` value.
  if (!user.email) {
    errors.push('Please provide a value for \'email\'');
  }

  // Validate that we have a `birthday` value.
  if (!user.birthday) {
    errors.push('Please provide a value for \'birthday\'');
  }

  // Validate that we have a `password` value.
  if (!user.password) {
    errors.push('Please provide a value for \'password\'');
  }

  // Validate that 'password' value matches `passwordConf` value.
  if (user.password !== user.passwordConf) {
    errors.push('\'passwordConf\' must match \'password\'');
  }

  if (errors.length > 0) {
    // Return the validation errors to the client.
    res.status(400).json({ errors });
  } else {
    // Add the user to the `users` array.
    users.push(user);

    // Set the status to 201 Created and end the response.
 	 res.status(201).end();
  }
});


module.exports = router;
