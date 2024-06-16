const fs = require("fs");

// Create a file, named "content.txt"
fs.appendFile("content.txt", "Hello node!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

// Read the "content.txt" file async
fs.readFile("content.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

// Read the "context.txt" file sync
const data = fs.readFileSync("content.txt");
console.log("Synchronous read: " + data.toString());

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

// console.log("Going to delete an existing file");
// fs.unlink("content.txt", function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("File deleted successfully!");
// });
