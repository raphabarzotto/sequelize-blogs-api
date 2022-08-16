const { Router } = require('express');

const { userRouter } = require('./userRouter');
const { categoryRouter } = require('./categoryRouter');
const { postRouter } = require('./postRouter');

const router = Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(postRouter);

module.exports = { router };