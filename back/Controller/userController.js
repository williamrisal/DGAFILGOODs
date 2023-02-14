const User = require('../models').Users;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = process.env.JWT_SECRET;

const userController = {
  async createUser(req, res) {
    try {
      const { email, password } = req.body;      
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ msg: 'Utilisateur existant' });
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const newUser = new User({ email, password: hash });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser }, secret, {
        expiresIn: 3600,
      });
      res.json({
        token,
        user: {
          id: savedUser._id,
          email: savedUser.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Utilisateur introuvable' });
      }

      if (!(password == user.password)) {
        return res.status(400).json({ msg: 'Mot de passe incorrect' });
      }

      const token = jwt.sign({ id: user._id }, secret, {
        expiresIn: 3600,
      });
      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { email } = req.body;
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(400).json({ msg: 'Utilisateur introuvable' });
      }

      user.email = email;
      const updatedUser = await user.save();
      res.json({
        user: {
          id: updatedUser._id,
          email: updatedUser.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
