import DeleteLegendaryService from "../../services/legendary/DeleteLegendaryService.js";

class DeleteLegendaryController {
  constructor() {}

  delete(request, response) {
    const { id } = request.params;

    const resultado = DeleteLegendaryService.delete(id);

    response.send(resultado);
  }
}

export default DeleteLegendaryController;
