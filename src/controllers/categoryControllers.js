const { Category } = require('../database/models');

const postCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  // usei create ou inves de findOrCreate pq não precisa validar antes
  const newCategory = await Category.create({ name });

  return res.status(201).json(newCategory);
};

module.exports = {
  postCategory,
};