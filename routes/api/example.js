const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/user"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/rental/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

  router
.route("/name/:location")
.get(controller.findAllByName)
.put(controller.update)

module.exports = router;
