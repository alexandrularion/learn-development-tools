const express = require("express");
const routes = require("./routes");

const app = express();

// Tip: Request - object containing all the information
// about the app that is requesting the information

// Tip: Response - object containing all the information
// that we can send back to the app who is requesting
app.get("/", (request, response) => {
  response.send("The app is listening now.");
});

app.use(express.json());

// Tip: Aggreate all the routes within "/api" route
app.use("/api", routes);

app.listen(8080, (error) => {
  if (error) {
    console.log("The app couldn't start due to: ", error.message);
  }
  console.log("The app is listening on http://localhost:8080.");
});
