const express = require("express");
const {list, show, create} = require("../controllers/orderController");
const router = express.Router();

router.get("/orders", list);
router.get("/orders/:id", show);
router.post("/orders", create)

module.exports = router;