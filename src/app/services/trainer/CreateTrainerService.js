const TrainerModel = require("../../models/TrainerModel");
const { v4 } = require("uuid");

const CreateTrainerService = {
    createTrainer: (name, idade, cidade) => {
        if (name.length < 5) {
            return { error: "Nome deve ter ao menos 5 caracteres." };
        } else if (idade <= 14 || idade < 40) {
            return { error: "A idade deve ser entre 15 e 39 anos." };
        } else if (
            cidade.toLowerCase() !== "pallet" &&
            cidade.toLowerCase() !== "vermelion"
        ) {
            return { error: "Essa cidade não é válida." };
        }

        const novoTrainer = new TrainerModel(v4(), name, idade, cidade);

        return novoTreinador;
    },
};

module.exports = CreateTrainerService;
