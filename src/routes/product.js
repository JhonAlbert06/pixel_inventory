const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/add', productController.save);
router.get('/delete/:id', productController.delete);
router.get('/edit/:id', productController.edit);
router.post('/update/:id', productController.update);
router.get('/increaseStock', productController.editStock)
router.post('/updateStock/:id', productController.updateStock)

module.exports = router;