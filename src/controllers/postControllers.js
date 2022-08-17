const { BlogPost, PostCategory, Category } = require('../database/models');

const postBlogPost = async (req, res) => {
  const { tokenData } = req;
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const existCategories = await Category.findAll();
  const existCategoriesIds = existCategories.map((category) => category.id);
  // tentei pesquisar outro jeito de fazer isso
  // source: https://www.designcise.com/web/tutorial/how-to-check-if-an-array-contains-all-elements-of-another-array-in-javascript
  const hasCategories = categoryIds.every((categoryId) => existCategoriesIds.includes(categoryId));

  if (!hasCategories) return res.status(400).json({ message: '"categoryIds" not found' });

  const newBlogPost = await BlogPost.create({ title,
      content,
      categoryIds,
      published: new Date(),
      updated: new Date(),
      userId: tokenData.id });

  await Promise.all(categoryIds
    .map((id) => PostCategory.create({ postId: newBlogPost.dataValues.id, categoryId: id })));

  return res.status(201).json(newBlogPost);
};

module.exports = {
  postBlogPost,
};