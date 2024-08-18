const express = require("express");
const router = express.Router();
const { getUserInfo } = require("../controllers/auraController");

router.post("/get-user-info", getUserInfo);

module.exports = router;
