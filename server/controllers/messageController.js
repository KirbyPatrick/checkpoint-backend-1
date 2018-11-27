const messageModel = require("../models/messageModel");

module.exports.list = (req, res) => {
    messageModel.find({}).exec().then(messages => {
        return res.json(messages)
    })
};

module.exports.show = (req, res, next) => {
    messageModel.findById(req.params.id).exec().then(message => {
        return res.json(message)
    })
};