const express = require('express');
const blockController = require('./blockController');
const router = express.Router();

router.get('/info', blockController.getInfo);

module.exports = router;
