const ListTrainerService = require("./ListTrainerService");

const UpdateTrainerService = {
    update: (name, idade, cidade) => {
        const trainers = ListTrainerService.listTreinadorService();
        const trainerIndex = trainers.findIndex(
            (item) => item.id === Number(id)
        );

        if (trainerIndex === -1) {
            return { error: "Treinador não encontrado" };
        } else if (name.length < 5) {
            return { error: "O nome precisa ter no mínimo 5 caracteres" };
        } else if (idade <= 14 || idade >= 40) {
            return { error: "A idade deve ser entre 15 e 39 anos." };
        } else if (
            cidade.toLowerCase() !== "pallet" &&
            cidade.toLowerCase() !== "vermelion"
        ) {
            return { error: "A cidade não é válida" };
        }

        trainers[trainerIndex] = { name, idade, cidade };

        return {
            id,
            ...trainer[trainerIndex],
        };
    },
};

module.exports = UpdateTreinadorService;
