import livros from "../models/Livro.js";//modelo 

class LivrosContoller{

    static listarLivros = (req,res) => {//listando todos os livros e colocando
        livros.find()
          .populate('autor')//o populate ele vai buscar os dados do autor
          .exec((err,livros)=>{
            res.status(200).json(livros)
        })
    }

    static cadastrarLivro = (req,res) => {//cadastrando 
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falaha ao cadastrar livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Livro atualizado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
      

      static listarLivroPorId = (req, res) => {//buscar o livro pelo id
        const id = req.params.id;
      
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
          } else {
            res.status(200).send(livros);
          }
        })
      }
      
      static excluirLivro = (req,res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
      }
      
      static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora
        
        livros.find({'editora': editora}, {}, (err, livros) => {
          res.status(200).send(livros);
          
        })
      }
      


}

export default LivrosContoller;