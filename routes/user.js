const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.js")


router.get("/user", userController.index)
router.get("/new", userController.new)
// router.get("/:id", userController.show) dont need because im not saving my users to a databse
// router.post("/", userController.create) dont need for same reason above, not actually saving users to the DB

module.exports = router

