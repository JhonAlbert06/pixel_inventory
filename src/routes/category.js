const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategories);
router.post('/add', categoryController.save)
router.get('/update/:id', categoryController.edit)
router.post('/update/:id', categoryController.update)
router.get('/delete/:id', categoryController.delete)

module.exports = router;