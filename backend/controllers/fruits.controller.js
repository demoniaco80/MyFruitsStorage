const { fruit, fruits } = require("../models");
const db = require("../models")
const Fruit = fruits;
const Op = db.Sequelize;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const fruit = {
      name: req.body.name,
      type: req.body.type,
      quantity: req.body.quantity
    };

    Fruit.create(fruit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the fruit"
            });
        });
};
exports.findAll = (req, res) => {
  Fruit.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the fruit"
            });
        });
};
exports.findOne = (req, res) => {
  const id = req.params.id;
  Fruit.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Fruit with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Fruit with id=" + id
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  Fruit.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Fruit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Fruit with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Fruit.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fruit was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete a Fruit with id=${id}. Maybe ToDo was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ToDo with id=" + id
        });
      });
};
