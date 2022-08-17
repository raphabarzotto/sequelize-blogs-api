const { Category } = require('../database/models');

// requisito 8, código muito parecido porém mais simples que o requisito 4
const postCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  // usei create ou inves de findOrCreate pq não precisa validar antes
  const newCategory = await Category.create({ name });

  return res.status(201).json(newCategory);
};

// requisito 9, bem simples
const getAllCategory = async (req, res) => {
  const categories = await Category.findAll();
  
  return res.status(200).json(categories);
};

module.exports = {
  postCategory,
  getAllCategory,
};