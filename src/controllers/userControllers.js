const { User } = require('../database/models');
const { validateUserJoi, tokenGenerator } = require('../helpers');

// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
// usei a documentação para procurar a melhor query
// requisito 4, código muito parecido com o que fiz no Store Manager
const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { error } = validateUserJoi.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  const [user1, created] = await User.findOrCreate({
    where: { displayName, email, password, image },  
  });

  if (!created) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = tokenGenerator({ email: user1.dataValues.email });

  return res.status(201).json({ token });
};

// requisito 5, código muito parecido com o que fiz no Store Manager
const getAllUser = async (_req, res) => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  
  return res.status(200).json(allUsers);
};

// requisito 6, código muito parecido com o requisito 5
const getByIdUser = async (req, res) => {
  const { id } = req.params;

  const userByIdGiven = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!userByIdGiven) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(userByIdGiven);
};

// requisito 17, código muito parecido com o que fiz no Store Manager
const deleteById = async (req, res) => {
  const { id } = req.tokenData;

  await User.destroy({ where: { id } });

  return res.status(204);
};

module.exports = {
  postUser,
  getAllUser,
  getByIdUser,
  deleteById,
};