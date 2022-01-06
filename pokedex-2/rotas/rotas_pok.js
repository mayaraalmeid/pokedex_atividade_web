const express = require('express');
const listarPokemon = require('../scripts/listar_pokemons')

const router = express.Router();
const test = new listarPokemon();
const pokemon = test.pokemons;

router.get( '/', (req,res)=>{
    res.render('index', {
        pageTitle: 'Pokemons',
        pokemon: pokemon
    });
    
}  

);

router.get('/:id', (req, res)=>{
    const iD = req.params.id;
   for(let i of pokemon){
       if(Number(i.id) == Number(iD)){
           //console.log(pokemon);
             res.render('indexid',{
                i: i 
             });
         };
     };
    });


module.exports = router;