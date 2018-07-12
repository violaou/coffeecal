/* Hello, World! program in node.js */
console.log('Hello, World!')
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

const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.static('static'))

app.get('/', function (req, res, next) {
  res.sendFile('index.html')
})
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
