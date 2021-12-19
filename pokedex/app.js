const { header } = require('express/lib/request');
const servercreate = require('http');
const listarPokemon = require('./scripts/listar_pokemons');

servercreate.createServer(function(req, res){
    if (req.url === '/'){
        const test = new listarPokemon();
        const pokemon = test.pokemons;
        let content = "<tr>"
        
        for (const i in pokemon){
            const line = `<td>${pokemon[i].id}</td>`+
            `<td><img src = " ${pokemon[i].img}" width = "90"> ${pokemon[i].nome} </td>` + 
            `<td>${pokemon[i].pvMax}</td>` + 
            `<td>${pokemon[i].ataque}</td>` + 
            `<td>${pokemon[i].defesa}</td>` + 
            `<td>${pokemon[i].ataque_especial}</td>` + 
            `<td>${pokemon[i].defesa_especial}</td>` +
            `<td>${pokemon[i].velocidade}</td></tr>`
            
          
            if (Number(i + 1) % 3  == 0 ) {
                content += `${line} </tr> <tr>`
            }
            else {
                content += line;
            }
            
        }
        res.statusCode = 200;
        res.end( `
            <html>
                <head>
                <meta charset = "UTF-8">
                <meta http-equiv = "X-UA-Compatible" content = "IE = edge">
                <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
                <title> Pokemons </title>
                </meta>
                </head>
                <body> 
                    <table>
                        <caption>Pokedex<caption>
                        <tbody>
                        <tr>
                        <th> ID </th>
                        <th> Nome </th>
                        <th> Pvmax </th>
                        <th> Ataque </th>
                        <th> Defesa </th>
                        <th> Ataque Especial </th>
                        <th> Defesa Especial </th>
                        <th> Velocidade </th>
                    </tr>
                        ${content} 
                        </tbody>
                </body>
                </html>
    
    `

        );
    }   
    
}).listen(8080);




