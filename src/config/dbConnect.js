import mongoose from "mongoose"

mongoose.connect("mongodb+srv://hugomarangao3:123@cluster0.hea7x24.mongodb.net/alura-node?");
//conectando com o servidor mongo atlas 
let db = mongoose.connection;

export default db;
