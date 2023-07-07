import express from "express";
import db from './config/dbConnect.js'
import routes from './routes/index.js'

//--- conexao servidor mongo
db.on("erro",console.log.bind(console, 'Erro de conexao'));//fazendo a conexao do servidor e lidamdo com o erro 
db.once("open", () => {
    console.log('conexao com banco feita com sucesso')
})
//--- conexao servidor mongo

const app = express();
app.use(express.json());
routes(app);

export  default app;