const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/example"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/example/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

//Matches with "/api/example/name/:location"
router
.route("/name/:location")
.get(controller.findAllByName)
.put(controller.update)

module.exports = router;
