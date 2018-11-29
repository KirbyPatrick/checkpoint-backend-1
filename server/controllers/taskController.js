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

module.exports.create = (req, res) => {
    const newTask = new taskModel(req.body)
    newTask.save().then(task => {
        return res.json(task)
    })
};