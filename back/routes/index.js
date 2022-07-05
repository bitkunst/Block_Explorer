const express = require('express');
const blockRouter = require('./block');
const txRouter = require('./tx');

const router = express.Router();

router.use('/blocks', blockRouter);
router.use('/tx', txRouter);

module.exports = router;
