const express = require("express");

const router = express.Router();

// Tip: We can create as many routes we want for every entity
const userRoutes = require("./user.routes");

// Tip: Aggregate all the user routes using an entity prefix like "/users"
// Tip: We can aggregate as many routes we
router.use("/users", userRoutes);

module.exports = router;
