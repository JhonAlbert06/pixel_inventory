const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategories);
router.post('/add', categoryController.save)

module.exports = router;