const express = require("express");
const parse = require("body-parser");

// Expres framework instance
const app = express();

// Application port
const port = 3000;

// Middleware to parse JSON bodies
app.use(parse.json());

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/register", (req, res) => {
  // E.g. Write the user in the database
  // Do other actions needed

  // Give response to the client
  res
    .status(200)
    .json({ message: "The account has been created succesfully." });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
