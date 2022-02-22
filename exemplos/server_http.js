var http = require('http')

const hostname = 'localhost';
const port = 8081;

http.createServer(function(req,res){
  res.end("Hello Krug! Welcome to my website.")
}).listen(port)

console.log("O Servidor está rodando em: " + hostname + ":" + port)

