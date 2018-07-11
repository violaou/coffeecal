/* Hello, World! program in node.js */
console.log("Hello, World!")
// var http = require("http");
// http.createServer(function (request, response) {
//    // Send the HTTP header
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);
//
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3004, function () {
  console.log('Example app listening on port 3004!');
});
