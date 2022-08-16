const { tokenGenerator } = require('../helpers');
const { User } = require('../database/models');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }

  // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const getUserFromDatabase = await User.findOne({ where: { email, password } });

  if (!getUserFromDatabase) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = tokenGenerator({ id: getUserFromDatabase.id, email });

  return res.status(200).json({ token });
};

module.exports = loginController;