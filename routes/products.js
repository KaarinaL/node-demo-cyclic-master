const express = require('express');
const router = express.Router();

const productController = require('../controllers/products.js');

router.get('/', productController.home);
router.get('/products/:id', productController.getProduct);

module.exports = router;