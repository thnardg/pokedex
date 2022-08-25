import ListTrainersService from "../../services/trainer/ListTrainersService.js";

class ListTrainerController {
  constructor() {}

  list(request, response) {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ erro: "Você não passou o nome do treinador" });
    }

    const trainer = ListTrainersService.list(name);

    return response.json(trainer);
  }
}

export default ListTrainerController;
