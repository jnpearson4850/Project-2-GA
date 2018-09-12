//need to update this 31AUG where crud will go


const { WODs, Comment } = require("../models/Workout");
const User = require("../models/User");

module.exports = {
    index: (req, res) => {
        WODs.find({})
            .then((WODs) => {
                res.render("workout/index", { WODs })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    show: (req, res) => {
        console.log(req)
        WODs.findOne({ _id: req.params.id })
            .then(WODs => {
                res.render("workout/show", { WODs })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    create: (req, res) => {
        Comment.create({
            commentText: req.body.commentText
        }).then(comment => {
            WODs.findOneAndUpdate({ _id: req.params.id }).then(WOD => {
                WOD.comments.push(comment)
                WOD.save(err => {
                    res.redirect(`/workout/${req.params.id}`)
                })
            })
        })
    },
    update: (req, res) => {
        WODs.findByIdAndUpdate(req.params.id, req.body,
            function (err, post) {
                if (err) return next(err);
                res.json(post);
            })
    },
    delete: (req, res) => {
        WODs.findOneAndRemove({ _id: req.body.id })
            .then(WODs => {
                res.redirect("/")
            })
    }
}


