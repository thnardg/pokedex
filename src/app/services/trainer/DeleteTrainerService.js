import ListTrainerService from "../ListTreinadorService.js";

const DeleteTrainerService = {
  delete: (id) => {
    const trainer = ListTrainerService.listTrainerService();
    const trainerIndex = trainer.findIndex((item) => item.id === Number(id));

    if (trainerIndex === -1) {
      return { erro: "Treinador não encontrado" };
    }

    trainer.splice(trainerIndex, 1);

    return { mensagem: "Treinador removido com sucesso" };
  },
};

export default DeleteTrainerService;
