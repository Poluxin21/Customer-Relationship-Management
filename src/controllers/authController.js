const AuthService = require('../services/authService');

exports.register = async (req, res, next) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await AuthService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await AuthService.getUserProfile(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
