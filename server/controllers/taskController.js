const taskModel = require("../models/taskModel");

module.exports.list = (req, res) => {
    taskModel.find({}).exec().then(tasks => {
        return res.json(tasks)
    })
};

module.exports.show = (req, res) => {
    taskModel.findById(req.params.id).exec().then(task => {
        return res.json(task)
    })
}