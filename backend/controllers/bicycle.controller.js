const db = require("../models")
const Bike = db.bicycles;
const Op = db.Sequelize;

exports.create = (req, res) => {
    if (!req.body.brand) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const bicycle = {
        brand: req.body.brand,
        model: req.body.model
    };

    Bike.create(bicycle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the bicycle"
            });
        });
};
exports.findAll = (req, res) => {
  Bike.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the bicycle"
            });
        });
};
exports.findOne = (req, res) => {
  const id = req.params.id;
  Bike.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Bike with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bike with id=" + id
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  Bike.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bike was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bike with id=${id}. Maybe Tutorial was not found or req.body is empty!`
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

    Bike.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Bike was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete a Bike with id=${id}. Maybe ToDo was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ToDo with id=" + id
        });
      });
};
