var http = require('http');
var kitty = require('./modules/sum.js');

http.createServer(function(request, response){
  var someNumber = 0;
  someNumber = kitty(7, 4);
  console.log("APP SERVER: " + someNumber);
  response.writeHead(200);
  response.write("Whats up Chiyaks!");
  response.end();
}).listen(8000);

console.log("Listening!");
