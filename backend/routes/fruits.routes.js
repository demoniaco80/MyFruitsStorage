module.exports = app => {
    const fruits = require("../controllers/fruits.controller.js");

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fruits.create);
  
    // Retrieve all Tutorials
    router.get("/", fruits.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", fruits.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", fruits.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", fruits.delete);
  
    app.use('/api/fruits', router);
}