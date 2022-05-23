const express = require('express');
const { register, login , getPersonData} = require('../controllers/personControllers');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productControllers');
const { authMiddleware  } = require('../middlewares/authMiddieware');
const router = express.Router();

router.post('/',addProduct);
router.get('/',getProducts);
router.put('/:prodId', updateProduct);
router.delete('/:prodId',deleteProduct);

module.exports = router;