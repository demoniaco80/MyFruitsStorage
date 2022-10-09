module.exports = app => {
    const bicycles = require("../controllers/bicycle.controller.js");

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", bicycles.create);
  
    // Retrieve all Tutorials
    router.get("/", bicycles.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", bicycles.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", bicycles.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", bicycles.delete);
  
    app.use('/api/bicycles', router);
}