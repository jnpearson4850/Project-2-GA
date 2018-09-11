const user = require("../models/User")
// const { Comment } = require("../models/Workout")
// const passport = require("passport")

module.exports = {
    index: (req, res) => {
        res.render('user/workout')
    },
    new: (req, res) => {
        res.render("user/new")
    }
}