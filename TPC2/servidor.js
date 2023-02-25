var http = require('http')
var meta = require('./aux')
var url = require('url')
var fs = require('fs')


http.createServer(function (req, res) {
    console.log(req.method + " " + req.url + " " + meta.myDateTime())
    
    var pedido = url.parse(req.url, true).pathname
    
   
    fs.readFile('./html/' + pedido.substring(1) + '.html', function(err,data) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        if(err){
            res.write("ERRO: na leitura do ficheiro :: " + err)
        }
        else {
            res.write(data)
        }
        res.end();
    })
   
}).listen(7778)

console.log("Servidor à escuta na porta 7777...")

