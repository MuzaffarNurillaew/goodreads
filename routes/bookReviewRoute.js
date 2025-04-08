const express = require('express');
const router = express.Router();
const bookReviewController = require('../controllers/bookReviewController');

router.get('/', bookReviewController.index);

router.get('/add', bookReviewController.addForm);
router.post('/add', bookReviewController.add);

router.get('/update/:id', bookReviewController.editForm);
router.post('/update', bookReviewController.update);

router.get('/delete/:id', bookReviewController.deleteForm);
router.post('/delete/:id', bookReviewController.delete);
module.exports = router;
