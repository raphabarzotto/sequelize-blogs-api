const { User } = require('../database/models/index');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  const token = jwtService.createToken(user.email);
  return res.status(201).json({ token });
};

async function getAllUser(req, res) {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );

  return res.status(200).json(users);
}

module.exports = {
  postLogin,
  getAllUser,
};