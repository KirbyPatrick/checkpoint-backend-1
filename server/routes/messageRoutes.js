const express = require("express");
const {list, show, create} = require("../controllers/messageController")
const router = express.Router();
// const {list, show, create, update, remove};
router.get("/messages", list);
router.get("/messages/:id", show);
router.post("/messages", create);
// router.put("/comments/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;