const express = require("express");
const {list} = require("./controllers/commentController")
const router = express.Router();
// const {list, show, create, update, remove};
router.get("/comments", list);
// router.get("/comments/:id", show);
// router.post("/comments", create);
// router.put("/comments/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;