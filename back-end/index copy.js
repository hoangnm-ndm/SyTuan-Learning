/**
 * * MERN Stack.
 * - MongoDB (ODM: mongoosejs).
 * - Express (v5)
 * - ReactJS (js)
 * - NodeJS
 */
console.log("hoang hello cac ban!");
import http from "http";

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello SyTuan\n");
  if (request.url === "/") {
    response.write("Welcome to the home page!");
  } else if (request.url === "/about") {
    response.write("Welcome to the about page!");
  } else {
    response.write("404 Not Found");
  }

  if (request.method === "GET") {
    response.write("GET request received");
  } else if (request.method === "POST") {
    response.write("POST request received");
  } else {
    response.write("Other request method received");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
