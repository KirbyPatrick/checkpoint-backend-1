const express = require("express");
const {list} = require("../controllers/foxController");
const router = express.Router();

router.get("/foxes", list);

module.exports = router;