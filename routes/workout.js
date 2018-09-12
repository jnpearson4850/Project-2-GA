
const express = require('express');
const router = express.Router();
const workoutController = require("../controllers/workout")

// router.get("/comment", commentController.index)

router.get("/workout", workoutController.index)
router.get("/workout/:id", workoutController.show)
router.post("/workout/:id", workoutController.create)
// router.put("/workout/:id", workoutController.update)
router.delete("/workout/:id", workoutController.delete)

module.exports = router