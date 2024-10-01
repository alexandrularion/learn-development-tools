var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/create", function (req, res, next) {
  const body = req.body;
  const params = req.params;

  console.log(body);
  console.log(params);

  // Query to SQL DB to insert data
  // Prisma

  res.send(JSON.stringify({ message: "Hello world" }));
});

module.exports = router;
