const { User } = require('../database/models');
const { validateUserJoi, tokenGenerator } = require('../helpers');

// requisito 4, código muito parecido com o que fiz no Store Manager
const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { error } = validateUserJoi.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const [user, created] = await User.findOrCreate({
    where: { displayName, email, password, image },  
  });

  if (!created) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = tokenGenerator({ email: user.dataValues.email });

  return res.status(201).json({ token });
};

module.exports = {
  postUser,
};