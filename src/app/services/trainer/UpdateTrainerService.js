const ListTrainerService = require("./ListTrainerService");

const UpdateTrainerService = {
  update: (id, name, age, city) => {
    const trainers = ListTrainerService.listAll();

    const updateTrainer = trainers.find((trainer) => trainer.id === id);
    const updateTrainerIndex = trainers.findIndex(
      (trainer) => trainer.id === id
    );

    if (!updateTrainer) {
      return {
        sucess: false,
        message: "Treinador não encontrado",
      };
    }

    if (age < 15 || age >= 40) {
      return {
        sucess: false,
        message: "Somente maiores de 15 e menores de 40 anos podem participar",
      };
    }

    trainers[updateTrainerIndex] = {
      id,
      name,
      age,
      city,
    };

    return {
      sucess: true,
      message: trainers[updateTrainerIndex],
    };
  },
};

module.exports = UpdateTrainerService;
