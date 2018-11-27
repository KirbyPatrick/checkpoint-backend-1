const express = require("express");
const {list, show} = require("../controllers/taskController");
const router = express.Router();

router.get("/tasks", list);
router.get("/task/:id", show);

module.exports = router;