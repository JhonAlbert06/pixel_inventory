const express = require('express');
const router = express.Router();

const salesController = require('../controllers/salesController');

router.get('/', salesController.getSales);
router.post('/add', salesController.save);
router.get('/delete/:id', salesController.delete);
router.get('/edit/:id', salesController.edit);
router.post('/update/:id', salesController.update);

module.exports = router;