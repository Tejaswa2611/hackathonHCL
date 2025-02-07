const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');
const { crcEnrollment } = require('../controllers/crcEnrollment');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/crcEnrollment', crcEnrollment);

module.exports = router;
