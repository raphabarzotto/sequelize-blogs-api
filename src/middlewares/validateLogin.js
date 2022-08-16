async function validateLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
   return res.status(400).json({ message: 'Invalid fields' });
  }
    return next();
}

module.exports = { validateLogin };