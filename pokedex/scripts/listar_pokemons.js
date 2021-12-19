const Pokemon = require("../models/pokemons");
const fs = require('fs'); 
const path = require('path'); 

const dbPath = path.join(__dirname, '../../pokedex/db/pokedex.json');


 class listarPokemon {
    constructor(){
        this._pokemons = [];
    }

    get pokemons(){
        if(this._pokemons.length === 0){
            const filepk = fs.readFileSync(dbPath);

            const jsonData = JSON.parse(filepk)
            for (let  i = 0; i < jsonData.pokemons.length; i++){
                const nome = jsonData.pokemons[i].forms[0].name;
                const id = jsonData.pokemons[i].id;
                const img = jsonData.pokemons[i].sprites["front_default"];
                const pvMax = jsonData.pokemons[i].stats[0].base_stat;
                const ataque = jsonData.pokemons[i].stats[1].base_stat;
                const defesa = jsonData.pokemons[i].stats[2].base_stat;
                const ataque_especial = jsonData.pokemons[i].stats[3].base_stat;
                const defesa_especial = jsonData.pokemons[i].stats[4].base_stat;
                const velocidade = jsonData.pokemons[i].stats[5].base_stat;
                

                
                const pok = new Pokemon(id, nome, img, pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade);
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
