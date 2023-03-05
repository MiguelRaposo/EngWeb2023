var http = require('http')
var axios = require('axios')
var mypages = require('./mypages')
var fs = require('fs')

http.createServer(function (req,res) {
    var d = new Date().toISOString().substring(0,16)
    console.log(req.method + " " + req.url + " " + d)


    if (req.url == '/'){

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(mypages.genMainPage(d))

    }
    
    else if(req.url == '/distsexo'){

        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
            var m = 0
            var f = 0
            var o = 0
            var pessoas = resp.data
            pessoas.forEach(pessoa => {
                if (pessoa.sexo === 'masculino') {
                    m++
                }else if (pessoa.sexo === 'feminino'){
                    f++
                }else{
                    o++
                }
              });
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genDistSexoPage(m,f,o,d))
        })
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })
    
    }
    
    else if(req.url.match(/\/distsexo\/[masculino|feminino|outro]/)){
        
        axios.get('http://localhost:3000/pessoas?sexo=' + req.url.substring(10))
            .then(function(resp){
            var pessoas = resp.data
            var sexo = req.url.substring(10)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genDistSexoInPage(pessoas, sexo, d))
        })
    
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })  

    }

    else if(req.url == '/distdesporto'){

        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
            var dic = {}
            var pessoas = resp.data
            pessoas.forEach(pessoa => {
                pessoa.desportos.forEach(desporto => {
                    if(desporto in dic){
                        dic[desporto]+=1
                    }else{
                        dic[desporto]=1
                    }
                })
              })
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genDistDesportoPage(dic,d))
        })
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })
    
    }

    else if(req.url.match(/\/distdesporto\/.+/) && req.url!='/distdesporto/w3.css'){
    
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
            var pessoas = resp.data
            var pessoasP = []
            pessoas.forEach( pessoa => {
                if (pessoa.desportos.includes(req.url.substring(14))){
                    pessoasP.push(pessoa)
                }
            })
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genDistDesportoInPage(pessoasP,req.url.substring(14),d))
        })
    
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })  

    }

    else if(req.url == '/pessoas'){

        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
            var pessoas = resp.data
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genPeoplePage(pessoas, d))
        })

        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })
    
    }
    
    else if(req.url == '/pessoasOrdenadas'){
    
        axios.get('http://localhost:3000/pessoas?_sort=nome')
            .then(function(resp){
            var pessoas = resp.data
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genPeoplePage(pessoas, d))
        })
    
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })
    
    }
    
    
    else if(req.url.match(/\/pessoas\/p\d+/)){
    
        axios.get('http://localhost:3000/pessoas/' + req.url.substring(9))
            .then(function(resp){
            var pessoa = resp.data
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genPersonPage(pessoa, d))
        })
    
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })
    
    }

    else if(req.url == '/top10prof'){

        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
            var dic = {}
            var pessoas = resp.data
            pessoas.forEach(pessoa => {
                    if(pessoa.profissao in dic){
                        dic[pessoa.profissao]+=1
                    }else{
                        dic[pessoa.profissao]=1
                    }
                
            })
            var top =  Object.entries(dic).sort(([, a],[, b]) => b-a).slice(0,10)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genTOP10profPage(top,d))
        })
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })
    
    }

    else if(req.url.match(/\/top10prof\/.+/) && req.url!='/top10prof/w3.css'){
    
        axios.get('http://localhost:3000/pessoas?profissao='+req.url.substring(11))
            .then(function(resp){
            var pessoas = resp.data
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(mypages.genProfissaoPage(pessoas,req.url.substring(11),d))
        })
    
        .catch(err => {
            console.log("ERRO : " + err)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("<p>Erro</p>" + err + "</p>")
        })  

    }
    
    else if(req.url.match(/w3\.css$/)){

        fs.readFile("w3.css", function(erro,dados){
            if(erro){
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                res.end("<p>Erro na leitura de ficheiro</p>" + erro + "</p>")
            }else{
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(dados)
            }
        })
    
    }
    
    else{
    
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        res.end("<p>Operação nao suportada</p>" + req.url + "</p>")
    
    }

    
}).listen(7777)

console.log('serevidor á escuta na porta 7777...')






