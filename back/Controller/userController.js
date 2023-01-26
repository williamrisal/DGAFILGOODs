const models = require('../models');

exports.getUsers = (req, res) => {
  models.Users.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.connexionUser = (req, res) => {
    models.Users.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(users => {
        // si l'utilisateur n'existe pas
        if (!users) {
            res.send(false);
        }
        // si l'utilisateur existe
        else {
            res.send(true);
        }
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.createUser = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    
    // Create a User
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };
    
    // Save User in the database
    models.Users.create(user)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
        });
    }

    exports.UpdatePassword = (req, res) => {
        const id = req.params.id;
        models.Users.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "User was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating User with id=" + id
            });
        });
    }