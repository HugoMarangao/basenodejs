//modulo nativo do node

//required mesma coisa do import 
//const http = require("http")//queremos usar o modulo nativo http
// Alternativa correta! Através do método 
// createServer toda vez que o servidor HTTP receber 
// uma requisição, a função de callback passada para o método será executada.
const port = process.env.Port || 3000;//essa sera a porta que vamos usar ou do sevidor ou a 3000
import app from "./src/app.js";
// //criando rotas no node
// const rotas = {
//     '/':'curso de node',
//     '/livros':'Entrei na pag de livros',
//     '/autores':'Listagem de autores',
//     '/sobre':'Listagem de sbre'
// }

// const sever = http.createServer((req,res) => {//criamos nosso srvidor
//     res.writeHead(200,{'Content-Type':'text/plain'});//falando que vai ser texto
//     res.end(rotas[req.url]);//agora oque vier no endereco sera renderizado
// })

app.listen(port, () => {//chamando nossa porta e renderizando 
    console.log(`servidor escutando em http://localhost:${port}`)
})