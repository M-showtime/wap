const express = require('express');
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
  res.send('Get all users');
});

// POST /users
router.post('/', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
