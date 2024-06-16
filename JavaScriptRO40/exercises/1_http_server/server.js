// http is node.js core module
const http = require("http");

// creating server
const server = http.createServer(function (req, res) {
  // handling requests here

  if (req.url == "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Hello next front-end dev!" }));
    res.end();
  }

  //check the URL of the current request
  if (req.url == "/") {
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" }); // we need to specify type of response
    res.write("<html><body><p>This is home Page.</p></body></html>"); // set response content
    res.end(); // response end
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is student Page.</p></body></html>");
    res.end();
  } else if (req.url == "/admin/management") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is admin Page.</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});

const port = 3001;

server.listen(port); // server is listening on port 5000 (http://localhost:5000)

console.log(
  `node server running at port ${port}. Visit http://localhost:${port}`
);