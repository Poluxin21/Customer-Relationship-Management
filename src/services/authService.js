const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
  const { name, email, password } = userData;

  // Verificar se o usuário já existe
  let user = await User.findOne({ email });
  if (user) {
    throw new Error('User already exists');
  }

  // Criar um novo usuário
  user = new User({ name, email, password });
  await user.save();

  return { id: user.id, name: user.name, email: user.email };
};

exports.login = async (userData) => {
  const { email, password } = userData;

  // Verificar se o usuário existe
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Verificar a senha
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Gerar token JWT
  const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

exports.getUserProfile = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};
