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
      else{
        //create user  avec modepasse crypter sans token jwt
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const user = await User.create({
          email,
          password: passwordHash,
        });
        res.status(201).json({ msg: 'Utilisateur créé' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      console.log(email, password)
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ msg: 'Utilisateur introuvable' });
      }
      else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ msg: 'Mot de passe incorrect' });
        }
        else {
          return res.status(200).json({ msg: 'connecté' });

      }
    }
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
