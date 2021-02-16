const router = require("express").Router();
const exampleRoutes = require("./example");

// Book routes
router.use("/example", exampleRoutes);

module.exports = router;
