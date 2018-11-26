const commentModel = require("../models/commentModel");

module.exports.list = (req, res) => {
    commentModel.find({}).exec().then(comments => {
        return res.json(comments)
    })
}

module.exports.show = (req, res, next) => {
    
}