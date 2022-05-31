const express = require("express");
const {
    loginController,
    getUserDetails,
    registerController,
} = require("../controllers/auth.controllers");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");

router.get("/me", authMiddleware, getUserDetails);
router.post("/login", loginController);
router.post("/register", registerController);

module.exports = router;
