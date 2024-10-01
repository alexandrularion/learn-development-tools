// http is a node.js code module
const http = require("http");

const server = http.createServer();

server.listen(8000);

server.on("connect", () => {
  console.log("The server was started. URL: (http://localhost:8000)");
});

server.on("request", (req, res) => {
  console.log(req.headers);
  if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify([
        {
          name: "John",
          age: 20,
          location: "SUA",
        },
        {
          name: "Jane",
          age: 30,
          location: "RO",
        },
      ])
    );
  }
});
