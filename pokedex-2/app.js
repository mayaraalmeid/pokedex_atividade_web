const { header } = require('express/lib/request');
const express = require('express');
const routerpok = require('./rotas/rotas_pok');
const { engine }  = require('express-handlebars');
const req = require('express/lib/request');


const porta = 8080;
const app = express();

app.engine( 'hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/pokemons', routerpok);

app.get('/',(req, res) => {
    res.redirect('/pokemons')
}
);

app.listen ( porta ,  ( )  =>  {
    console . log ( `Servidor ouvindo em http: // localhost: ${porta} ` ) ;
} );


