const express = require("express");
const {list, show, create} = require("../controllers/taskController");
const router = express.Router();

router.get("/tasks", list);
router.get("/task/:id", show);
router.post("/tasks", create);

module.exports = router;