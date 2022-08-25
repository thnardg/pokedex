import UpdateLegendaryService from "../../services/legendary/UpdateLegendaryService.js";

class UpdateLegendaryController {
  constructor() {}

  update(request, response) {
    const { id } = request.params;
    const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense } = request.body;

    const updatedLegendary = UpdateLegendaryService.update(id, name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense);

    response.json(updatedLegendary);
  }
}

export default UpdateLegendaryController;
