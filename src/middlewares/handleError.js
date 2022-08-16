module.exports = (error, _req, res, _next) => {
  // debug raiz, apago depois, baseado no meu handleError do Store Manager
  console.error(error);
  
  if (error instanceof SyntaxError && error.message.includes('Unexpected string in JSON')) {
    return res.status(400).json({ message: 'Invalid body syntax' });
  }

  return res.status(500).json({ message: 'Something went wrong here, please try again later' });
};