const { header } = require('express/lib/request');
const express = require('express');
const routerpok = require('./rotas/rotas_pok');
const req = require('express/lib/request');
const cors = require ('cors');



const porta = 8000;
const app = express();

app.use(cors(
    'http://localhost:3000'
))

app.use('/pokemons', routerpok);

app.get('/',(req, res) => {
    res.redirect('/pokemons')
}
);

app.listen ( porta ,  ( )  =>  {
    console . log ( `Servidor ouvindo em http: // localhost: ${porta} ` ) ;
} );


