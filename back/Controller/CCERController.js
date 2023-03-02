const models = require('../models');

exports.getCCER = (req, res) => {
    models.CCER.findAll()
        .then(CCER => {
        res.send(CCER);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving CCER."
        });
        });
    }

exports.getCCERbycity = (req, res) => {
    const location = req.params.city;
    models.CCER.findAll({ where: { location: location } })
        .then(CCER => {
            res.send(CCER);
        })
        .catch(err => {
            res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving CCER."
             });
        });
    }
exports.createCCER = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    
    // Create a User
    const CCER = {
        name: req.body.name,
        location: req.body.location,
        stats: req.body.stats,
    };
    
    // Save User in the database
    models.CCER.create(CCER)
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

exports.Updatestats = (req, res) => {
    const id = req.params.id;
    models.CCER.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "CCER was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update CCER with id=${id}. Maybe CCER was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating CCER with id=" + id
        });
    });
    }