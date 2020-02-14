const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const cat = require("../models/burger");


module.exports = router;