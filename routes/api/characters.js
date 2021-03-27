const router = require("express").Router();
const characterController = require("../../Controllers/characterController");

// Route for api/characters/
router
  .route("/")
  .post(characterController.create)
  .get(characterController.findAll);

// Route for api/characters/:id
router
  .route("/:id")
  .get(characterController.findById)
  .put(characterController.update)
  .delete(characterController.remove);

module.exports = router;
