import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {//padrao da colecao 
        id: {type: String},
        titulo: {type: String, required: true},//required = obrigatorio
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},//ao inves de inserir vamos fazer uma referencia
        editora: {type: String, required: true},
        numeroPaginas: {type:Number}
    }
);
//aqui estamos criando a colecao e o padrao que ela vai seguir 
const livros = mongoose.model('livros', livroSchema);

export default livros;