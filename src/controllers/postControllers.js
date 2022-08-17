const { User, BlogPost, PostCategory, Category } = require('../database/models');

// requisito 12
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

// requisito 13
const getAllBlogPost = async (req, res) => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { 
        model: User, 
        as: 'user',
        attributes: { exclude: 'password' },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return res.status(200).json(blogPosts);
};

// requisito 14
const getByIdBlogPost = async (req, res) => {
  const { id } = req.params;
  const blogPosts = await BlogPost.findAll();

  const existenceCheck = blogPosts.some((post) => post.id === +id);
  if (!existenceCheck) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  const post = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, 
        as: 'user',
        attributes: { exclude: 'password' } },
      { model: Category, 
        as: 'categories', 
        through: { attributes: [] }, 
      }], 
  });

  return res.status(200).json(post);
};

// requisito 15
// coloquei as mensagens fora para consistencia e passar no linter
const msg1 = 'Unauthorized user';
const msg2 = 'Categories cannot be edited';
const msg3 = 'Some required fields are missing';

const putByIdBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.params;
  const { tokenData } = req;

  if (tokenData.id !== +id) return res.status(401).json({ message: msg1 });

  if (categoryIds) return res.status(400).json({ message: msg2 });

  if (!title || !content) return res.status(400).json({ message: msg3 });

  await BlogPost.update(req.body, { where: { id } });

  const updatedPost = await BlogPost.findOne({
    attributes: { exclude: ['published', 'updated'] },
    where: { id },
    include: [
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });

  return res.status(200).json(updatedPost);
};

module.exports = {
  postBlogPost,
  getAllBlogPost,
  getByIdBlogPost,
  putByIdBlogPost,
};