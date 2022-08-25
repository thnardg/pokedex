import ListTrainersService from "./ListTrainersService.js";

class DeleteTrainerService {
  constructor() {}
  delete(id) {
    const trainer = ListTrainersService.list();
    const trainerIndex = trainer.findIndex((item) => item.id === Number(id));

    if (trainerIndex === -1) {
      return { erro: "Treinador não encontrado" };
    }

    trainer.splice(trainerIndex, 1);

    return { mensagem: "Treinador removido com sucesso" };
  }
}

export default DeleteTrainerService;
