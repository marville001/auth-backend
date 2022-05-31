const express = require("express");
const { getBooksController, addBookController } = require("../controllers/books.controllers");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");

router.get("/", authMiddleware, getBooksController);
router.post("/", authMiddleware, addBookController);

module.exports = router;
