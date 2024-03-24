const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "This is your application home page." }));
  } else if (req.url === "/register") {
    res.writeHead(201);
    res.end(
      JSON.stringify({
        message: "Your account has beeen created.",
        data: {
          firstName: "John",
          lastName: "Doe",
          age: 23,
          location: "USA",
        },
      })
    );
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Error! The page doesn't exist." }));
  }
});

server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
