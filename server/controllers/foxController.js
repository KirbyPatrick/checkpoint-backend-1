//need to import fetch npm because unlike react, node.js doesn't come with it installed
const fetch = require('node-fetch');

module.exports.list = (req, res) => {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(fox => {
            return res.send(fox)
        });
};