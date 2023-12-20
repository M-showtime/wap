const express = require('express');
const router = express.Router();

// GET /products
router.get('/', (req, res) => {
  res.send('Get all products');
});

// POST /products
router.post('/', (req, res) => {
  res.send('Create a new product');
});

module.exports = router;
