const express = require("express");
const {list, show} = require("../controllers/messageController")
const router = express.Router();
// const {list, show, create, update, remove};
router.get("/messages", list);
router.get("/messages/:id", show);
// router.post("/comments", create);
// router.put("/comments/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;