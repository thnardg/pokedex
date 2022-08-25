import DeleteTrainerService from "../../services/trainer/DeleteTrainerService.js";

class DeleteTrainerController {
  constructor() {}

  delete(request, response) {
    const { id } = request.params;

    const resultado = DeleteTrainerService.delete(id);

    response.send(resultado);
  }
}

export default DeleteTrainerController;
