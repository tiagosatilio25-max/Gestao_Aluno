import mongoose from 'mongoose';    


const conectarBanco = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Gestao-alunos");

        console.log("MondoDB conectado!");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB: ", error);
    }   
};

export default conectarBanco;