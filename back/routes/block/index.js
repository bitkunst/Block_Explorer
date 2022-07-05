const express = require('express');
const blockController = require('./blockController');
const router = express.Router();

router.get('/info', blockController.getInfo);

router.get('/prev', blockController.getPrev);

router.post('/searchBlock', blockController.searchBlock);

module.exports = router;
