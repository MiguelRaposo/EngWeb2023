exports.genDistSexoInPage = function(lista, sexo, data){
    var pagHTML =` 
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>${sexo}</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de pessoas de sexo ${sexo}</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                    </tr>
                `
    
    for(let i=0 ; i<lista.length ; i++){
        pagHTML +=`
        <tr>
            <td>${lista[i].id}</td>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].idade}</td>
            <td>${lista[i].morada.cidade}</td>
        </tr>
        `
    }



    pagHTML +=`
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>
    `
    
    return pagHTML
}
exports.genDistSexoPage = function(m,f,o,data){
    pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>About People</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de pessoas</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Masculino</th>
                        <th>Feminino</th>
                        <th>Outro</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="/distsexo/masculino">${m}</a>
                        </td>
                        <td>
                            <a href="/distsexo/feminino">${f}</a>
                        </td>
                        <td>
                            <a href="/distsexo/outro">${o}</a>
                        </td>
                    </tr>
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>`

    return pagHTML
}
exports.genMainPage = function(data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Main Page</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Pagina inicial</h1>
                </header>
                <div>
                    <p>
                        <a class="w3-btn w3-grey" style="width:10%" href="/pessoas" >Pessoas</a>
                        <a class="w3-btn w3-grey" style="width:10%" href="/pessoasOrdenadas" >Pessoas Ordenadas</a>
                        <a class="w3-btn w3-grey" style="width:10%" href="/distsexo" >Destribuiçao por sexo</a>
                        <a class="w3-btn w3-grey" style="width:10%" href="/distdesporto" >Destribuiçao por desporto</a>
                        <a class="w3-btn w3-grey" style="width:10%" href="/top10prof" >Top 10 profições</a>
                    </p>
                </div>

                
                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>
    `
    return pagHTML
}
exports.genPeoplePage = function(lista, data){
    var pagHTML =` 
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>About People</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de pessoas</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Cidade</th>
                    </tr>
                `
    
    for(let i=0 ; i<lista.length ; i++){
        pagHTML +=`
        <tr>
            <td>${lista[i].id}</td>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].idade}</td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].morada.cidade}</td>
        </tr>
        `
    }



    pagHTML +=`
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>
    `
    
    return pagHTML
}
exports.genPersonPage = function(p,d){

    var pagHTML =` 
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Person Page</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>${p.nome}</h1>
                </header>

            
                <div class="w3-container">
                  <p>Idade : ${p.idade}</p>
                </div>
                <div class="w3-container">
                  <p>Sexo : ${p.sexo}</p>
                </div>
                <div class="w3-container">
                  <p>Morada</p>
                  <p>Cidade :${p.morada.cidade}</p>
                  <p>Distrito :${p.morada.distrito}</p>
                </div>
                <div class="w3-container">
                  <p>BI : ${p.BI}</p>
                </div>
                <div class="w3-container">
                  <p>Descrição : ${p.descrição}</p>
                </div>
                <div class="w3-container">
                  <p>profissão${p.profissao}</p>
                </div>
                <div class="w3-container">
                  <p>Partido Politico ${p.partido_politico}</p>
                </div>
                <div class="w3-container">
                  <p>Religião : ${p.religiao}</p>
                </div>
                <div class="w3-container">
                  <p>Desportos : ${p.desportos}</p>
                </div>
                <div class="w3-container">
                  <p>Animais : ${p.animais}</p>
                </div>
                <div class="w3-container">
                  <p>Figuras Publicas : ${p.figura_publica_pt}</p>
                </div>
                <div class="w3-container">
                  <p>Marca de carro : ${p.marca_carro}</p>
                </div>
                <div class="w3-container">
                  <p>Destinos favoritos : ${p.destinos_favoritos}</p>
                </div>
                <div class="w3-container">
                  <p>Atributos : ${p.atributos}</p>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${d}</address>
                </footer>

            </div> 
        </body>
    </html>
    `
    
    return pagHTML
}
exports.genDistDesportoPage = function(dic,data){
    pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>About People</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de pessoas</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Desporto</th>
                        <th>Número de praticantes</th>
                    </tr>
                    
                    `
    for(var key in dic) {
        pagHTML +=` 
            <tr>
                <td>
                ${key}
                </td>
                <td>
                <a href="/distdesporto/${key}">${dic[key]}</a>
                </td>
            </tr>
            `
    }
    pagHTML +=`  
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>`

    return pagHTML
}
exports.genDistDesportoInPage = function(lista, desporto, data){
    var pagHTML =` 
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>${desporto}</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de pessoas que praticam ${desporto}</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                    </tr>
                `
    
    for(let i=0 ; i<lista.length ; i++){
        pagHTML +=`
        <tr>
            <td>${lista[i].id}</td>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].idade}</td>
            <td>${lista[i].morada.cidade}</td>
        </tr>
        `
    }



    pagHTML +=`
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>
    `
    
    return pagHTML
}
exports.genTOP10profPage = function(lista,data){
    var pagHTML =` 
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Top 10 Profissão</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Top 10 Profissão</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Profissão</th>
                        <th>Número de profissionais</th>
                    </tr>
                `

    for(var i = 0 ; i<10; i++){
        
        pagHTML +=`
        <tr>
            <td>${lista[i][0]}</td>
            <td>
                <a href="/top10prof/${lista[i][0]}">${lista[i][1]}</a>
            </td>
        </tr>
        `
    }



    pagHTML +=`
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>
    `

    return pagHTML
}
exports.genProfissaoPage = function(lista, prof, data){
    var pagHTML =` 
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>${prof}</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de pessoas que são ${prof}</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                    </tr>
                `
    
    for(let i=0 ; i<lista.length ; i++){
        pagHTML +=`
        <tr>
            <td>${lista[i].id}</td>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].idade}</td>
            <td>${lista[i].morada.cidade}</td>
        </tr>
        `
    }



    pagHTML +=`
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                  <h5>Footer</h5>
                  <address>Generated in EngWeb 2023 ${data}</address>
                </footer>

            </div> 
        </body>
    </html>
    `
    
    return pagHTML
}