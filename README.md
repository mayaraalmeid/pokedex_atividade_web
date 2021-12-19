# pokedex_atividade_web_07
xercício Prático
Crie um projeto node chamado Pokedex. Esse projeto deve ter na pasta raiz um arquivo package.json devidamente preenchido com os dados da aplicação.
Crie um script JS chamado ./models/pokemons.js que deve expor os dados de todos os pokemons contidos no arquivos pokedex.json. O objeto JS com os dados deve ser exportado para que possa ser usado como módulo em outros scripts JS.
Crie um script JS chamado listar_pokemons.js que deve exibir no console todos os pokemons do pokedex.json. Os seguintes atributos devem ser impressos: - id - nome - pvMax - ataque - defesa - ataque especial - defesa especial - velocidade - Dica: use a função console.table
Crie um script app.js que cria um servidor Web e que retorna um HTML que lista todos os pokemons do pokedex.json quando a rota /pokemons for requisitada via GET. Os seguintes atributos devem serem listados são os mesmos listados anteriormente.
Faça com que o script app.js seja executado a partir do comando npm start.
