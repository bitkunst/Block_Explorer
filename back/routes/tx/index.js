const express = require('express');
const txController = require('./txController');
const router = express.Router();

router.get('/info', txController.getInfo);

router.get('/prev', txController.getPrev);

router.post('/searchAddress', txController.searchAddress);

router.post('/searchHash', txController.searchHash);

module.exports = router;
