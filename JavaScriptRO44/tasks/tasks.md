```markdown
# Task 1: Create Node.js Web Server

The following example is a simple Node.js web server contained in the `server.js` file.

### Code Fragment 1

```javascript
// http is node.js core module
const http = require("http");

// creating server
const server = http.createServer(function (req, res) {
  // handling requests
});

const port = 5000;

server.listen(port); // server is listening on port 5000 (http://localhost:5000)

console.log(
  `node server running at port ${port}. Visit http://localhost:${port}`
);
```

Now we can handle incoming requests.

### Code Fragment 2

```javascript
// http is node.js core module
const http = require("http");

// creating server
const server = http.createServer(function (req, res) {
  // handling requests here

  // check the URL of the current request
  if (req.url == "/") {
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" }); // specify type of response
    res.write("<html><body><p>This is home Page.</p></body></html>"); // set response content
    res.end(); // response end
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is student Page.</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is admin Page.</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});

const port = 5000;

server.listen(port); // server is listening on port 5000 (http://localhost:5000)

console.log(
  `node server running at port ${port}. Visit http://localhost:${port}`
);
```

### Code Fragment 3

We can also send JSON response using `JSON.stringify` method.

```javascript
if (req.url == "/data") {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "Hello next front-end dev!" }));
  res.end();
}
```

---

# Task 2: Node File System

Node implements File I/O using simple wrappers around standard POSIX functions. The Node File System (`fs`) module can be imported using the following syntax:

```javascript
const fs = require("fs");
```

### Create File

First, prepare a text file in the same directory as your Node script using the `fs` module.

```javascript
const fs = require("fs");

fs.appendFile("content.txt", "Hello node!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
```

You can also use the `open` method:

```javascript
const fs = require("fs");

fs.open("mynewfile.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
```

### Read from File

```javascript
const fs = require("fs");

// Asynchronous read
fs.readFile("content.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
const data = fs.readFileSync("content.txt");
console.log("Synchronous read: " + data.toString());
```

### Writing to Existing File

```javascript
const fs = require("fs");

console.log("Write into existing file");
fs.writeFile("content.txt", "I really enjoy writing in node!", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written successfully, let's read it!");

  fs.readFile("content.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
```

### Delete a File

To delete a file, use the `unlink` method.

```javascript
const fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink("content.txt", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("File deleted successfully!");
});
```

### Create Directory

The `fs` module allows us to manage directories as well as files.

```javascript
const fs = require("fs");

console.log("Going to create directory /sda/notes");
fs.mkdir("/sda/notes", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});
```

To read and delete a directory, use:

- `fs.readdir()`
- `fs.rmdir()`

---

# Task 3: Node and Socket.IO Application

WebSockets API provides a bidirectional communication channel between a client and a server, enabling real-time interactions.

### Init Project

Start by creating a new directory and running `npm init`. Use the `-y` flag to skip prompts.

```json
{
  "name": "socket-chat-example",
  "version": "0.0.1",
  "description": "my first socket.io app",
  "dependencies": {}
}
```

### Dependency Installation

Install the `express` server:

```bash
npm install express@4
```

### Application Setup

Create an `index.js` file and set up the application:

```javascript
const app = require("express")();
const http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

http.listen(3000, () => {
  console.log("listening on port: 3000");
});
```

Run the application using:

```bash
node index.js
```

### Add Some HTML

Send an HTML file as the response:

```javascript
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
```

### Adding Socket.IO

Install Socket.IO:

```bash
npm install socket.io
```

Update your server:

```javascript
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
```

Update `index.html` by adding this script before the `</body>` tag:

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>
```

### Events

The script section in `index.html` should include:

```html
<script>
  var socket = io();

  var messages = document.getElementById("messages");
  var form = document.getElementById("form");
  var input = document.getElementById("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      socket.emit("chat message", input.value);
      input.value = "";
    }
  });

  socket.on("chat message", function (msg) {
    var item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
</script>
```

### How We Can Improve the Application

- Broadcast a message to connected users when someone connects or disconnects.
- Add support for nicknames.
- Add “{user} is typing” functionality.
- Show who's online.
- Add private messaging.