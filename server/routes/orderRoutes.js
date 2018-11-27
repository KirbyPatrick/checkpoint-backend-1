const express = require("express");
const {list, show} = require("../controllers/orderController");
const router = express.Router();

router.get("/orders", list);
router.get("/orders/:id", show);

module.exports = router;