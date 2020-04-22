const express = require('express');
const router = express.Router();
const Pay = require('../models/pay');

router.post('/', Pay.purchaseMade)
router.get('/', Pay.paymentMade)

module.exports = router