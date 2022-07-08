const TreinadorModel = require('../models/TreinadorModel');
const { v4 } = require('uuid');

const CreateTreinadorService = {
    createTreinador: (name, idade, cidade) => {

        if (name.length < 5) {
            return {error: "Nome deve ter ao menos 5 caracteres."}
        } else if (age <= 14 || idade >= 40){
            return {error: "A idade deve ser entre 15 e 39 anos."}
        } else if (cidade.toLowerCase() !== "pallet" && city.toLowerCase() !== "vermelion") {
            return {error: "Essa cidade não é válida."}
        }

        const novoTreinador = new TreinadorModel(
            v4(),
            name,
            idade,
            cidade
        );

        return novoTreinador;
    }
}

module.exports = CreateTreinadorService;