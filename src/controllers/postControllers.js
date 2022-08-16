const { User } = require('../database/models/index');

async function getAllPost(req, res) {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );

  return res.status(200).json(users);
}

module.exports = {
  getAllPost,
};