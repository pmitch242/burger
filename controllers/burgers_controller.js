const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgerObject = {
            burgers: data
        };
        res.json(burgerObject);
    })
});

router.post("/api/burger", (req, res) => {
    burger.insertOne([req.body.burger_name], (result) => {
        // Send back the ID
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    burger.updateOne(condition, (result) => {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;