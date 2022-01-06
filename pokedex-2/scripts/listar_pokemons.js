const Pokemon = require("../models/pokemons");
const fs = require('fs'); 
const path = require('path'); 
const { type } = require("express/lib/response");

const dbPath = path.join(__dirname, '../../pokedex/db/pokedex.json');


 class listarPokemon {
    constructor(){
        this._pokemons = [];
    }

    get pokemons(){
        if(this._pokemons.length === 0){
            const filepk = fs.readFileSync(dbPath);

            const jsonData = JSON.parse(filepk)
            for(let i of jsonData.pokemons){
                
                const nome = i.forms[0].name;
                const id = i.id;
                const img = i.sprites["front_default"];
                const pvMax = i.stats[0].base_stat;
                const ataque = i.stats[1].base_stat;
                const defesa = i.stats[2].base_stat;
                const ataque_especial = i.stats[3].base_stat;
                const defesa_especial = i.stats[4].base_stat;
                const velocidade = i.stats[5].base_stat;
                const altura = i.weight;
                const peso = i.height;
                const tipo = [];

                for (let j of i.types){
                   tipo.push(j["type"]["name"]);
                }
                const tipo0 = tipo[0];

                const tipo1 = tipo[1];
        

                const pok = new Pokemon(id, nome, img, pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade, tipo0, tipo1, peso, altura );
                this._pokemons.push(pok);
                   

        }
    }
        
        return this._pokemons;

        
    }
    set pokemons(pokemon){
        this._pokemons = pokemon;
    }


}

module.exports = listarPokemon;

//const test = new listarPokemon();
//console.table(test.pokemons);
