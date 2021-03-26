// Dependencies
const router = require("express").Router();
const characterRoutes = require("./characters");

// Use routes
// path:/api/characters
router.use("/characters", characterRoutes);

// Export
module.exports = router;