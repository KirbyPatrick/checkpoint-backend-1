const orderModel = require("../models/orderModel");

module.exports.list = (req, res) => {
    orderModel.find({}).exec().then(orders => {
        return res.json(orders)
    })
};

module.exports.show = (req, res, next) => {
    orderModel.findById(req.params.id).exec().then(order => {
        return res.json(order)
    })
};

module.exports.create = (req, res) => {
    const newOrder = new orderModel(req.body)
    newOrder.save().then(order => {
        return res.json(order)
    })
};