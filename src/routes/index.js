const { Router } = require('express');

const { userRouter } = require('./userRouter');
const { categoryRouter } = require('./categoryRouter');
const { blogPostsRouter } = require('./blogPostsRouter');

const router = Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(blogPostsRouter);

module.exports = { router };