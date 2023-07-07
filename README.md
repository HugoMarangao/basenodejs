# basenodejs
Todo conhecimento base para usar no nodejs

bibliotecas usadas:
- Nodemon: faz com que nao seja necessário reiniciar o servidor sempre
npm install nodemon@2.0.15 -D
- express: facilita para aplicaçãos mais robustas 
npm install express@4.17.3

Database MongoDB Atlas: para armazenamos as informacoes sem ser na maquina 

Organizacao das pastas 
 - Config: vai conter a configuracao do servidor 
 - Controller: onde sera colocado todos os sistemas de busca,edicao,adicao,delete dos sistemas
 - Models: os modelos que cada lista ira usar sendo colocados em string,number,etc... se colocar o required:true ele fica obrigatorio
 - Routes:onde contera as rotas para as requisicoes 

funcionamento
- App.js: vai conter a inicializacao do servidor e todas as rotas contidas
- na pasta Routes
  - index.js: voce ira importar todas as rotas criadas para cada funcionalidade e colocar dentro do express.json
    - dentro por exemplo do livroRoutes.js: voce ira importar o controller daquele sistema e fazer as rotas deles com get,post,put,delete "lembrando que a busca deve ser da mais expecifica para menos especifica"
- na pasta Models: voce passa como sera a estrutura da colecao, podemos fazer referencia a outras colecoes 
  - por exemplo:  {//padrao da colecao 
                        id: {type: String},
                        titulo: {type: String, required: true},//required = obrigatorio
                        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},//ao inves de inserir vamos fazer uma referencia
                        editora: {type: String, required: true},
                        numeroPaginas: {type:Number}
                   }
- na pasta Controller
  - por exemplo: livrosController.js: vai conter tudo que voce quer obeter dessa colecao, adicao de itens,busca,delete, busca de ietns especificos, busca com referencia 

Curiosidade
  no livrosController.js ha uma busca realizada por id no qual adicionamos populate = (inserie item de outra colecao)
